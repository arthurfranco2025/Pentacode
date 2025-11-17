import PrismaClient from "../../prisma";

interface CreateItemRequest {
  product_id: string;
  pedido_id: string;
  qtd: number;
  product2_id?: string;
  removidos?: { id: string }[];
  adicionais?: { id: string }[];
  observacoes?: string;
  payWithPoints?: boolean;
  pointsUsed?: number;
}

class CreateItemService {
  async execute({
    product_id,
    pedido_id,
    qtd,
    product2_id,
    removidos,
    adicionais,
    observacoes,
    payWithPoints,
    pointsUsed
  }: CreateItemRequest) {

    if (!pedido_id) throw new Error("É preciso ter um pedido para criar um item");
    if (!product_id) throw new Error("É preciso ter um produto");
    if (!qtd || qtd <= 0) throw new Error("Quantidade inválida");

    // 🔹 Buscar pedido com cliente
    const pedido = await PrismaClient.pedido.findUnique({
      where: { id: pedido_id },
      include: {
        cliente: {
          select: { data_nasc: true }
        }
      }
    });

    if (!pedido) throw new Error("Pedido não encontrado");
    if (!pedido.cliente) throw new Error("Cliente do pedido não encontrado");

    // 🔹 Buscar produto principal (precisamos do produto antes de checar idade para saber
    // se é necessário exigir a data de nascimento)
    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      include: { category: true }
    });
    if (!produto) throw new Error("O produto não existe");

    // Função utilitária para normalizar nomes de categoria (remove acentos e coloca em lower case)
    const normalize = (s: string) =>
      s
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '');

    const isAlcoholCategory = (name: string) => {
      const n = normalize(name);
      return (
        n.includes('bebida') && n.includes('alco') || // cobre 'Bebidas Alcoolicas' / 'Bebidas alcoólicas'
        n.includes('vinhos') ||
        n.includes('alcool')
      );
    };
    // 🔹 Meio a meio
    let produto2 = null;
    if (product2_id) {
      produto2 = await PrismaClient.product.findUnique({
        where: { id: product2_id },
        include: { category: true }
      });
      if (!produto2) throw new Error("O segundo sabor não existe");

      // Meio a meio só é permitido para pizzas
      const categoriasPermitidas = ["Pizzas salgadas", "Pizzas doces"];
      const categorias = [produto.category, produto2.category];
      const todasSaoPizza = categorias.every(c => categoriasPermitidas.includes(c.name));
      if (!todasSaoPizza) throw new Error("Meio a meio só é permitido para pizzas salgadas ou doces");

      // Verificação de bebida alcoólica no segundo sabor será feita abaixo junto com a do primeiro sabor
    }

    const precisaChecarIdade = isAlcoholCategory(produto.category.name) || (produto2 && isAlcoholCategory(produto2.category.name));
    let idade = null as number | null;
    if (precisaChecarIdade) {
      const dataNasc = pedido.cliente.data_nasc;
      if (!dataNasc) throw new Error('Você precisa estar logado para adicionar bebidas alcoólicas à comanda.');

      const hoje = new Date();
      idade = hoje.getFullYear() - dataNasc.getFullYear();
      const mes = hoje.getMonth() - dataNasc.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) idade--;

      if (idade < 18) {
        throw new Error('Menores de 18 anos não podem adicionar bebidas alcoólicas à comanda.');
      }
    }

    // 🔹 Cálculo de preço e pontos
    let precoFinal = produto.price;
    let pontosFinal = produto.points;

    if (produto2) {
      precoFinal = (produto.price / 2) + (produto2.price / 2) + 10;
      pontosFinal = (produto.points / 2) + (produto2.points / 2) + 10;
    }

    // 🔹 Adicionais
    let adicionaisTotal = 0;
    let adicionaisPontos = 0;
    if (adicionais && adicionais.length > 0) {
      const ids = adicionais.map(ad => ad.id);
      const adicionaisData = await PrismaClient.adicional.findMany({
        where: { id: { in: ids } },
        select: { price: true, points: true }
      });

      adicionaisTotal = adicionaisData.reduce((acc, ad) => acc + ad.price, 0);
      adicionaisPontos = adicionaisData.reduce((acc, ad) => acc + ad.points, 0);
    }

    // Multiplicar pela quantidade
    precoFinal = qtd * (precoFinal + adicionaisTotal);
    pontosFinal = qtd * (pontosFinal + adicionaisPontos);

    // Se o cliente pagar com pontos, sobrescrever:
    if (payWithPoints) {
      // preço em dinheiro fica 0
      precoFinal = 0;
      // pontos armazenados no item representam os pontos consumidos
      pontosFinal = pointsUsed || 0;

      // reduzir pontos do cliente
      await PrismaClient.cliente.update({
        where: { id: pedido.cliente_id },
        data: { points: { decrement: pontosFinal } },
      });

      // Ao atualizar pedido/comanda, incrementamos price com 0, e provavelmente NÃO incrementamos pontos (pontos ganhos), então usamos valores apropriados abaixo.
    }

    // Verifica se o pedido existe antes de criar o item (mensagem mais clara que um erro de null)
    const pedidoExiste = await PrismaClient.pedido.findUnique({ where: { id: pedido_id } });
    if (!pedidoExiste) {
      throw new Error('Pedido não encontrado');
    }

    // 🔹 Criar item
    const item = await PrismaClient.item.create({
      data: {
        pedido: { connect: { id: pedido_id } },
        product: { connect: { id: product_id } },
        product2: produto2 ? { connect: { id: product2_id } } : undefined,
        qtd,
        price: precoFinal,
        points: pontosFinal,
        payWithPoints: payWithPoints ?? false,
        dois_sabores: !!produto2,
        removidos: removidos && removidos.length > 0 ? removidos : null,
        adicionais: adicionais && adicionais.length > 0 ? adicionais : null,
        observacoes: observacoes || null,
        status: 'Na fila'
      },
      select: {
        id: true,
        product_id: true,
        product2_id: true,
        qtd: true,
        price: true,
        points: true,
        pedido_id: true,
        dois_sabores: true,
        removidos: true,
        status: true
      },
    });

    // Atualiza pedido
    // Atualiza valores do pedido: preço e pontos (registramos em pedidos apenas os pontos GASTOS pelo cliente)
    await PrismaClient.pedido.update({
      where: { id: pedido_id },
      data: {
        price: { increment: precoFinal },
        points: { increment: pontosFinal },
      }
    });

    // 🔹 Atualizar comanda
    const comanda = await PrismaClient.comanda.findFirst({
      where: { cliente_id: pedido.cliente_id },
      select: { id: true }
    });

    // Busca o pedido para obter o comanda_id (garante que atualizamos a comanda associada exatamente a esse pedido — evita pegar uma comanda antiga do mesmo cliente)
    const pedidoData = await PrismaClient.pedido.findUnique({
      where: { id: pedido_id },
      select: { comanda_id: true, cliente_id: true }
    });

    if (pedidoData && pedidoData.comanda_id) {
      await PrismaClient.comanda.update({
        where: { id: pedidoData.comanda_id },
        data: {
          price: { increment: precoFinal },
          points: { increment: pontosFinal},
        }
      });
    } else if (pedidoData) {
      // Fallback: se por algum motivo o pedido não tiver comanda_id, tentamos atualizar a comanda aberta do cliente (menos desejável, mas mantém compatibilidade)
      const comanda = await PrismaClient.comanda.findFirst({
        where: { cliente_id: pedidoData.cliente_id, status: 'aberta' },
        select: { id: true }
      });
      
      if (comanda) {
        await PrismaClient.comanda.update({
          where: { id: comanda.id },
          data: {
            price: { increment: precoFinal },
            points: { increment: pontosFinal },
          }
        });
      }
    }

    return { item, mensagem: "Item criado com sucesso" };
  }
}

export { CreateItemService };

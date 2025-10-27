import PrismaClient from "../../prisma";

interface CreateItemRequest {
  product_id: string;
  pedido_id: string;
  qtd: number;
  product2_id?: string; 
  removidos?: { id: string }[];
  adicionais?: { id: string }[];
  observacoes?: string;
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
  }: CreateItemRequest) {

    if (!pedido_id) throw new Error("É preciso ter um pedido para criar um item");
    if (!product_id) throw new Error("É preciso ter um produto");
    if (!qtd || qtd <= 0) throw new Error("Quantidade inválida");

    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      include: { category: true }
    });
    if (!produto) throw new Error("O produto não existe");

    let produto2 = null;
    if (product2_id) {
      produto2 = await PrismaClient.product.findUnique({
        where: { id: product2_id },
        include: { category: true }
      });
      if (!produto2) throw new Error("O segundo sabor não existe");

      const categoriasPermitidas = ["Pizzas salgadas", "Pizzas doces"];
      const categorias = [produto.category, produto2.category];
      const todasSaoPizza = categorias.every(c => categoriasPermitidas.includes(c.name));
      if (!todasSaoPizza) {
        throw new Error("Meio a meio só é permitido para pizzas salgadas ou doces");
      }
    }

    // Cálculo de preço base
    let precoFinal = produto.price;
    let pontosFinal = produto.points;

    // Se for meio a meio
    if (produto2) {
      precoFinal = (produto.price / 2) + (produto2.price / 2) + 10;
      pontosFinal = (produto.points / 2) + (produto2.points / 2) + 10;
    }

    // Somar os adicionais, se existirem
    let adicionaisTotal = 0;
    let adicionaisPontos = 0;
    if (adicionais && adicionais.length > 0) {
      const ids = adicionais.map((ad) => ad.id);
      const adicionaisData = await PrismaClient.adicional.findMany({
        where: { id: { in: ids } },
        select: { price: true, points: true },
      });

      adicionaisTotal = adicionaisData.reduce((acc, ad) => acc + ad.price, 0);
      adicionaisPontos = adicionaisData.reduce((acc, ad) => acc + ad.points, 0);
    }

    // Multiplica tudo pela quantidade
    precoFinal = qtd * (precoFinal + adicionaisTotal);
    pontosFinal = qtd * (pontosFinal + adicionaisPontos);

    // Verifica se o pedido existe antes de criar o item (mensagem mais clara que um erro de null)
    const pedidoExiste = await PrismaClient.pedido.findUnique({ where: { id: pedido_id } });
    if (!pedidoExiste) {
      throw new Error('Pedido não encontrado');
    }

    // Cria o item
    const item = await PrismaClient.item.create({
      data: {
        pedido: { connect: { id: pedido_id } },
        product: { connect: { id: product_id } },
        product2: produto2 ? { connect: { id: product2_id } } : undefined,
        qtd,
        price: precoFinal,
        points: pontosFinal,
        dois_sabores: !!produto2,
        removidos: removidos && removidos.length > 0 ? removidos : null,
        adicionais: adicionais && adicionais.length > 0 ? adicionais : null,
        observacoes: observacoes || null,
      },
      select: {
        id: true,
        product_id: true,
        product2_id: true,
        qtd: true,
        price: true,
        pedido_id: true,
        dois_sabores: true,
        removidos: true,
      },
    });

    // Atualiza pedido
    await PrismaClient.pedido.update({
      where: { id: pedido_id },
      data: {
        price: { increment: precoFinal },
        points: { increment: pontosFinal },
      }
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
          points: { increment: pontosFinal },
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
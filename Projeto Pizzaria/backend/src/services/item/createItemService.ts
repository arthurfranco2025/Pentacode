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

    // 🔹 Calcular idade do cliente
    const dataNasc = pedido.cliente.data_nasc;
    if (!dataNasc) throw new Error("Data de nascimento do cliente não encontrada");

    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) idade--;

    // 🔹 Buscar produto principal
    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      include: { category: true }
    });
    if (!produto) throw new Error("O produto não existe");

    // 🔹 Verificar bebida alcoólica
    if (idade < 18 && produto.category.name === "Bebidas Alcoolicas") {
      throw new Error("Menores de 18 anos não podem adicionar bebidas alcoólicas à comanda.");
    }

    if (idade < 18 && produto.category.name === "Vinhos") {
      throw new Error("Menores de 18 anos não podem adicionar bebidas alcoólicas à comanda.");
    }
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

      // Verificar bebida alcoólica no segundo sabor
      if (idade < 18 && produto2.category.name === "Bebidas alcoólicas") {
        throw new Error("Menores de 18 anos não podem adicionar bebidas alcoólicas à comanda.");
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

    // 🔹 Criar item
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

    // 🔹 Atualizar pedido
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

    if (comanda) {
      await PrismaClient.comanda.update({
        where: { id: comanda.id },
        data: {
          price: { increment: precoFinal },
          points: { increment: pontosFinal },
        }
      });
    }

    return { item, mensagem: "Item criado com sucesso" };
  }
}

export { CreateItemService };

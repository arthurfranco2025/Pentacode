import PrismaClient from "../../prisma";

interface CreateItemRequest {
  product_id: string;
  pedido_id: string;
  qtd: number;
  removidos?: {id: string}[]
}

class CreateItemService {
  async execute({ product_id, pedido_id, qtd, removidos }: CreateItemRequest) {
    // 🔎 validações iniciais
    if (!pedido_id) {
      throw new Error("É preciso ter um pedido para criar um item");
    }

    if (!product_id) {
      throw new Error("É preciso ter um produto");
    }

    if (!qtd || qtd <= 0) {
      throw new Error("Quantidade inválida");
    }

    // 🔎 busca o pedido e a comanda associada
    const pedido_comanda = await PrismaClient.pedido.findUnique({
      where: { id: pedido_id },
      select: { comanda_id: true },
    });

    if (!pedido_comanda) {
      throw new Error("O pedido não existe");
    }

    if (!pedido_comanda.comanda_id) {
      throw new Error("Esse pedido não tem comanda vinculada");
    }

    // 🔎 busca a comanda correta
    const comanda = await PrismaClient.comanda.findUnique({
      where: { id: pedido_comanda.comanda_id },
      select: { status: true },
    });

    if (!comanda) {
      throw new Error("Comanda não encontrada");
    }

    if (comanda.status === "fechada") {
      throw new Error("A comanda que engloba seu pedido está fechada");
    }

    if (comanda.status === "aguardando pagamento") {
      throw new Error("A comanda está aguardando pagamento, não é possível adicionar mais itens");
    }

    // 🔎 garante que o produto existe
    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      select: {
        price: true,
        points: true
      },
    });

    if (!produto) {
      throw new Error("O produto não existe");
    }

    // 💰 calcula preço do item
    const precoFinal = qtd * produto.price;
    const pontosFinal = qtd * produto.points



    // 📝 cria o item
    const item = await PrismaClient.item.create({
      data: {
        pedido: { connect: { id: pedido_id } },
        product: { connect: { id: product_id } },
        qtd,
        price: precoFinal,
        points: pontosFinal,
        removidos: Array.isArray(removidos) && removidos.length > 0 ? removidos : null
      },
      select: {
        id: true,
        product_id: true,
        qtd: true,
        price: true,
        pedido_id: true,
        removidos: true
      },
    });

    // 🔎 recalcula o total do pedido
    const itens = await PrismaClient.item.findMany({
      where: { pedido_id },
    });

    const totalPedido = itens.reduce((acc, i) => acc + i.price, 0);
    const totalPedidoPonto = itens.reduce((acc, i) => acc + i.points, 0)

    await PrismaClient.pedido.update({
      where: { id: pedido_id },
      data: {
        price: totalPedido,
        points: totalPedidoPonto,
      },
    });

    // 🔎 recalcula o total da comanda (somando todos os pedidos dela)
    const pedidos = await PrismaClient.pedido.findMany({
      where: { comanda_id: pedido_comanda.comanda_id },
      select: { price: true, points: true },
    });

    const totalComanda = pedidos.reduce((acc, p) => acc + p.price, 0);
    const totalComandaPoints = pedidos.reduce((acc, p) => acc + p.points, 0);

    await PrismaClient.comanda.update({
      where: { id: pedido_comanda.comanda_id },
      data: {
        price: totalComanda,
        points: totalComandaPoints,
      },
    });

    return item;
  }
}

export { CreateItemService };

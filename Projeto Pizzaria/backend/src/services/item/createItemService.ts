import PrismaClient from "../../prisma";

interface CreateItemRequest {
  product_id: string;
  cliente_id: string;
  qtd: number;
  removidos?: { id: string }[];
  adicionais?: { id: string }[];
  observacoes?: string;
}

class CreateItemService {
  async execute({ product_id, qtd, removidos, adicionais, observacoes, cliente_id }: CreateItemRequest) {
    if (!product_id) throw new Error("É preciso ter um produto");
    if (!qtd || qtd <= 0) throw new Error("Quantidade inválida");
    if (!cliente_id) throw new Error("Cliente é obrigatório");

    //  Busca comanda do cliente que esteja aberta
    const comanda = await PrismaClient.comanda.findFirst({
      where: {
        cliente_id,
        status: "aberta",
      },
      select: { id: true, cliente_id: true, status: true },
    });

    if (!comanda) {
      throw new Error("Nenhuma comanda aberta encontrada para este cliente.");
    }

    //  Busca pedido ativo do cliente (status = "pedido realizado")
    let pedido = await PrismaClient.pedido.findFirst({
      where: {
        comanda_id: comanda.id,
        cliente_id,
        status: "pedido realizado",
      },
    });

    //  Se não tiver pedido ativo, cria um novo automaticamente
    if (!pedido) {
      pedido = await PrismaClient.pedido.create({
        data: {
          comanda_id: comanda.id,
          cliente_id,
          status: "pedido realizado",
          price: 0,
          points: 0,
        },
      });
    }

    // Busca o produto
    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      select: { name: true, price: true, points: true, category_id: true },
    });

    if (!produto) throw new Error("O produto não existe");

    // Verificação de idade (para categoria alcoólica, por exemplo)
    if (produto.category_id === "c6803b68-81a6-45a9-957b-9899c31905ae") {
      const cliente = await PrismaClient.cliente.findUnique({
        where: { id: cliente_id },
      });

      const hoje = new Date();
      const nascimento = new Date(cliente.data_nasc);
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      const mes = hoje.getMonth() - nascimento.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--;

      if (idade < 18) throw new Error("Cliente deve ter pelo menos 18 anos.");
    }

    // Calcula preço e pontos
    const precoFinal = qtd * produto.price;
    const pontosFinal = qtd * produto.points;

    // 🧾 Cria o item no pedido ativo
    const item = await PrismaClient.item.create({
      data: {
        pedido_id: pedido.id,
        product_id,
        qtd,
        price: precoFinal,
        points: pontosFinal,
        removidos: removidos?.length ? removidos : null,
        adicionais: adicionais?.length ? adicionais : null,
        observacoes: observacoes || null,
      },
    });

    // 🔄 Atualiza totais do pedido
    const itensDoPedido = await PrismaClient.item.findMany({
      where: { pedido_id: pedido.id },
      select: { price: true, points: true },
    });

    const totalPedido = itensDoPedido.reduce((acc, i) => acc + i.price, 0);
    const totalPontos = itensDoPedido.reduce((acc, i) => acc + i.points, 0);

    await PrismaClient.pedido.update({
      where: { id: pedido.id },
      data: { price: totalPedido, points: totalPontos },
    });

    // 🔄 Atualiza totais da comanda
    const pedidos = await PrismaClient.pedido.findMany({
      where: { comanda_id: comanda.id },
      select: { price: true, points: true },
    });

    const totalComanda = pedidos.reduce((acc, p) => acc + p.price, 0);
    const totalComandaPontos = pedidos.reduce((acc, p) => acc + p.points, 0);

    await PrismaClient.comanda.update({
      where: { id: comanda.id },
      data: { price: totalComanda, points: totalComandaPontos },
    });

    return { item, mensagem: `Item adicionado ao pedido ${pedido.id}` };
  }
}

export { CreateItemService };
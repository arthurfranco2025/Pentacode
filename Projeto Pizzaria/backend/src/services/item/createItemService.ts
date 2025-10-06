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

    // Busca comanda aberta do cliente
    const comanda = await PrismaClient.comanda.findFirst({
      where: { cliente_id, status: "aberta" },
      select: { id: true, cliente_id: true, status: true },
    });
    if (!comanda) throw new Error("Nenhuma comanda aberta encontrada para este cliente.");

    // Busca ou cria pedido ativo
    let pedido = await PrismaClient.pedido.findFirst({
      where: { comanda_id: comanda.id, cliente_id, status: "pedido realizado" },
    });
    if (!pedido) {
      pedido = await PrismaClient.pedido.create({
        data: { comanda_id: comanda.id, cliente_id, status: "pedido realizado", price: 0, points: 0 },
      });
    }

    // Busca produto
    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      select: { name: true, price: true, points: true, category_id: true },
    });
    if (!produto) throw new Error("O produto não existe");

    // Verificação de idade para produtos alcoólicos
    if (produto.category_id === "c6803b68-81a6-45a9-957b-9899c31905ae") {
      const cliente = await PrismaClient.cliente.findUnique({ where: { id: cliente_id } });
      const hoje = new Date();
      const nascimento = new Date(cliente.data_nasc);
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      const mes = hoje.getMonth() - nascimento.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--;
      if (idade < 18) throw new Error("Cliente deve ter pelo menos 18 anos.");
    }

    // Calcula preço e pontos dos adicionais
    let adicionaisPrice = 0;
    let adicionaisPoints = 0;
    let adicionaisDB: { price: number; points: number; id: string }[] = [];

    if (adicionais?.length) {
      adicionaisDB = await PrismaClient.adicional.findMany({
        where: { id: { in: adicionais.map(a => a.id) } },
        select: { price: true, points: true, id: true },
      });

      adicionaisPrice = adicionaisDB.reduce((acc, a) => acc + a.price, 0);
      adicionaisPoints = adicionaisDB.reduce((acc, a) => acc + a.points, 0);
    }

    // Preço final considerando produto + adicionais
    const precoFinal = qtd * (produto.price + adicionaisPrice);
    const pontosFinal = qtd * (produto.points + adicionaisPoints);

    // Cria item no pedido
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

    // Atualiza totais do pedido
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

    // Atualiza totais da comanda
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

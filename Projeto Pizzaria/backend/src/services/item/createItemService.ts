import PrismaClient from "../../prisma";

interface CreateItemRequest {
  product_id: string;
  pedido_id?: string;
  qtd: number;
  removidos?: { id: string }[];
  adicionais?: { id: string }[];
  observacoes?: string;
}

class CreateItemService {
  async execute({ product_id, pedido_id, qtd, removidos, adicionais, observacoes }: CreateItemRequest) {
    if (!product_id) throw new Error("É preciso ter um produto");
    if (!qtd || qtd <= 0) throw new Error("Quantidade inválida");

    let pedido_comanda: any;

    // 🔎 Se não tiver pedido_id, cria um novo pedido automaticamente
    if (!pedido_id || pedido_id === "null") {
      // Busca uma comanda aberta qualquer (ou defina a regra que quiser)
      const comandaAberta = await PrismaClient.comanda.findFirst({
        where: { status: "aberta" },
        select: { id: true, cliente_id: true },
      });

      if (!comandaAberta) {
        throw new Error("Nenhuma comanda aberta encontrada para criar o pedido.");
      }

      const novoPedido = await PrismaClient.pedido.create({
        data: {
          comanda_id: comandaAberta.id,
          cliente_id: comandaAberta.cliente_id,
          status: "pedido realizado",
          price: 0,
          points: 0,
        },
      });

      pedido_id = novoPedido.id;
      pedido_comanda = { comanda_id: comandaAberta.id };
    } else {
      // Caso já tenha um pedido existente
      pedido_comanda = await PrismaClient.pedido.findUnique({
        where: { id: pedido_id },
        select: { comanda_id: true },
      });
    }

    if (!pedido_comanda?.comanda_id) {
      throw new Error("Esse pedido não tem comanda vinculada");
    }

    const comanda = await PrismaClient.comanda.findUnique({
      where: { id: pedido_comanda.comanda_id },
      select: { status: true, cliente_id: true },
    });

    if (!comanda) throw new Error("Comanda não encontrada");
    if (comanda.status === "fechada") throw new Error("A comanda está fechada");
    if (comanda.status === "aguardando pagamento") {
      throw new Error("A comanda está aguardando pagamento, não é possível adicionar itens");
    }

    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      select: { price: true, points: true, name: true, category_id: true },
    });

    if (!produto) throw new Error("O produto não existe");

    // 🔞 Restrição de 18 anos
    if (produto.category_id === "c6803b68-81a6-45a9-957b-9899c31905ae") {
      const cliente = await PrismaClient.cliente.findFirst({
        where: { id: comanda.cliente_id },
      });

      const hoje = new Date();
      const nascimento = new Date(cliente.data_nasc);
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      const mes = hoje.getMonth() - nascimento.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--;

      if (idade < 18) throw new Error("Cliente deve ter pelo menos 18 anos.");
    }

    // 💰 Cria item
    const precoFinal = qtd * produto.price;
    const pontosFinal = qtd * produto.points;

    const item = await PrismaClient.item.create({
      data: {
        pedido: { connect: { id: pedido_id } },
        product: { connect: { id: product_id } },
        qtd,
        price: precoFinal,
        points: pontosFinal,
        removidos: removidos?.length ? removidos : null,
        adicionais: adicionais?.length ? adicionais : null,
        observacoes: observacoes || null,
      },
    });

    // 🔄 Atualiza totais
    const itens = await PrismaClient.item.findMany({ where: { pedido_id } });
    const totalPedido = itens.reduce((acc, i) => acc + i.price, 0);
    const totalPontos = itens.reduce((acc, i) => acc + i.points, 0);

    await PrismaClient.pedido.update({
      where: { id: pedido_id },
      data: { price: totalPedido, points: totalPontos },
    });

    const pedidos = await PrismaClient.pedido.findMany({
      where: { comanda_id: pedido_comanda.comanda_id },
      select: { price: true, points: true },
    });

    const totalComanda = pedidos.reduce((acc, p) => acc + p.price, 0);
    const totalComandaPontos = pedidos.reduce((acc, p) => acc + p.points, 0);

    await PrismaClient.comanda.update({
      where: { id: pedido_comanda.comanda_id },
      data: { price: totalComanda, points: totalComandaPontos },
    });

    // 📝 Mensagem
    let mensagem = `Nenhum ingrediente removido do produto ${produto.name}`;
    if (removidos?.length) {
      const ingredientes = await PrismaClient.ingrediente.findMany({
        where: { id: { in: removidos.map(r => r.id) } },
        select: { nome: true },
      });
      const nomes = ingredientes.map(i => i.nome).join(", ");
      mensagem = `Ingredientes removidos do produto ${produto.name}: ${nomes}`;
    }

    return { item, mensagem };
  }
}

export { CreateItemService };
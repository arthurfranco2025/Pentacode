import PrismaClient from '../../prisma'

interface CreateItemAdicionalRequest {
  item_id: string
  adicional_id: string
  qtd: number
}

class CreateItemAdicionalService {
  async execute({ item_id, adicional_id, qtd }: CreateItemAdicionalRequest) {
    // Verifica se o item existe
    const itemExiste = await PrismaClient.item.findUnique({
      where: { id: item_id },
      include: { pedido: true, Item_adicional: { include: { adicional: true } } }
    });

    if (!itemExiste) {
      throw new Error('O item não existe');
    }

    // Verifica se o adicional existe
    const adicionalExiste = await PrismaClient.adicional.findUnique({
      where: { id: adicional_id }
    });

    if (!adicionalExiste) {
      throw new Error('O adicional não existe');
    }

    // Cria o item adicional
    const item_adicional = await PrismaClient.item_adicional.create({
      data: {
        item_id,
        adicional_id,
        qtd
      }
    });

    // 🔹 Recalcula o total do item (item + todos adicionais)
    let totalItemPrice = itemExiste.price;
    let totalItemPoints = itemExiste.points;

    const todosAdicionais = [...itemExiste.Item_adicional, { adicional: adicionalExiste, qtd }];
    for (const ad of todosAdicionais) {
      totalItemPrice += ad.adicional.price * ad.qtd;
      totalItemPoints += ad.adicional.points * ad.qtd;
    }

    // Atualiza o item com o novo total
    await PrismaClient.item.update({
      where: { id: item_id },
      data: {
        price: totalItemPrice,
        points: totalItemPoints
      }
    });

    // 🔹 Atualiza o pedido (recalculando todos os itens)
    const itensPedido = await PrismaClient.item.findMany({
      where: { pedido_id: itemExiste.pedido_id }
    });

    const totalPedido = itensPedido.reduce((acc, i) => acc + (i.price ?? 0), 0);
    const totalPedidoPoints = itensPedido.reduce((acc, i) => acc + (i.points ?? 0), 0);

    const pedidoAtualizado = await PrismaClient.pedido.update({
      where: { id: itemExiste.pedido_id },
      data: {
        price: totalPedido,
        points: totalPedidoPoints
      }
    });

    // 🔹 Atualiza a comanda (recalculando todos os pedidos)
    if (pedidoAtualizado.comanda_id) {
      const pedidosComanda = await PrismaClient.pedido.findMany({
        where: { comanda_id: pedidoAtualizado.comanda_id }
      });

      const totalComanda = pedidosComanda.reduce((acc, p) => acc + (p.price ?? 0), 0);
      const totalComandaPoints = pedidosComanda.reduce((acc, p) => acc + (p.points ?? 0), 0);

      await PrismaClient.comanda.update({
        where: { id: pedidoAtualizado.comanda_id },
        data: {
          price: totalComanda,
          points: totalComandaPoints
        }
      });
    }

    return item_adicional;
  }
}

export { CreateItemAdicionalService };
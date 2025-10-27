import PrismaClient from "../../prisma";

interface DeleteItemRequest {
  id: string;
}

class DeleteItemService {
  async execute({ id }: DeleteItemRequest) {

    const itemExiste = await PrismaClient.item.findUnique({
      where: { id },
      include: {
        Item_adicional: {
          include: { adicional: true }
        },
        pedido: true, // 🔹 já traz o pedido associado
      }
    });

    const pedido = await PrismaClient.pedido.findFirst({
      where:{
        id: itemExiste.pedido_id
      }, 
      select:{
        status: true
      }
    })

    if(pedido.status !== 'pedido em andamento'){
      throw new Error('Não é possível excluir esse item, ele já entrou em produção')
    }

    if (!itemExiste) {
      throw new Error("O item não existe");
    }

    if (!itemExiste.pedido_id) {
      throw new Error("O item não está vinculado a um pedido");
    }

    // 1. Calcula o valor total do item
    let valorItem = itemExiste.price * itemExiste.qtd;
    let pontosItem = itemExiste.points * itemExiste.qtd;

    // 2. Soma os adicionais do item, se existirem
    if (itemExiste.Item_adicional && itemExiste.Item_adicional.length > 0) {
      for (const adicional of itemExiste.Item_adicional) {
        valorItem += adicional.adicional.price * adicional.qtd;
        pontosItem += adicional.adicional.points * adicional.qtd;
      }
    }

    // 3. Deleta o item
    const item = await PrismaClient.item.delete({
      where: { id }
    });

    // 4. Atualiza o pedido (decrementando preço e pontos)
    const pedidoAtualizado = await PrismaClient.pedido.update({
      where: { id: itemExiste.pedido_id },
      data: {
        price: { decrement: valorItem },
        points: { decrement: pontosItem },
      }
    });

    // 5. Atualiza a comanda (recalculando todos os pedidos dela)
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
          points: totalComandaPoints,
        }
      });
    }

    return item;
  }
}

export { DeleteItemService };
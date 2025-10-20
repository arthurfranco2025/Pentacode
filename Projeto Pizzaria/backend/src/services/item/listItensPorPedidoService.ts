import PrismaClient from "../../prisma";

interface ListarItensRequest {
  pedido_id: string;
}

class ListItensPorPedidoService {
  async execute({ pedido_id }: ListarItensRequest) {
    if (!pedido_id) {
      throw new Error("Insira um pedido pra selecionar seus itens");
    }

    const pedidoExiste = await PrismaClient.pedido.findUnique({
      where: { id: pedido_id },
    });

    if (!pedidoExiste) {
      throw new Error("O pedido não existe");
    }

    const listaDeItens = await PrismaClient.item.findMany({
      where: { pedido_id },
      include: {
        product: { select: { name: true } },
        product2: { select: { name: true } },
        Item_adicional: {
          include: {
            adicional: { select: { nome: true, price: true } },
          },
        },
      },
    });

    const itensComNomes = await Promise.all(
      listaDeItens.map(async (item) => {


        if (item.removidos && Array.isArray(item.removidos)) {
          const idsRemovidos = item.removidos.map((r: any) => r.id);
          const ingredientes = await PrismaClient.ingrediente.findMany({
            where: { id: { in: idsRemovidos } },
            select: { id: true, nome: true },
          });
          item.removidos = ingredientes;
        }

        if (item.adicionais && Array.isArray(item.adicionais)) {
          const idsAdicionais = item.adicionais.map((a: any) => a.id);
          const adicionais = await PrismaClient.adicional.findMany({
            where: { id: { in: idsAdicionais } },
            select: { id: true, nome: true, price: true },
          });
          item.adicionais = adicionais;
        }

        return item;
      })
    );

    return itensComNomes;
  }
}

export { ListItensPorPedidoService };

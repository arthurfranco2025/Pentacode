import PrismaClient from "../../prisma";

// Tipagem clara para o item retornado pelo Prisma
interface ItemPedido {
  id: string;
  price: number;
  points: number; // Adicionando points
  payWithPoints?: boolean;
  removidos?: { id: string; nome: string }[];
  adicionais?: { id: string; nome: string; price: number }[];
  product: { name: string };
  product2?: { name: string };
  status?: string;
  observacao?: string;
  qtd: number;
}

interface ListarItensRequest {
  pedido_id: string;
}

class ListItensPorPedidoService {
  async execute({ pedido_id }: ListarItensRequest): Promise<ItemPedido[]> {
    if (!pedido_id) {
      throw new Error("Insira um pedido pra selecionar seus itens");
    }

    const pedidoExiste = await PrismaClient.pedido.findUnique({
      where: { id: pedido_id },
    });

    if (!pedidoExiste) {
      throw new Error("O pedido nÃ£o existe");
    }

    const listaDeItens = await PrismaClient.item.findMany({
      where: { pedido_id },
      include: {
        product: { select: { name: true, price: true, points: true } },
        product2: { select: { name: true, price: true, points: true } },
        Item_adicional: {
          include: { adicional: { select: { nome: true, price: true, points: true } } },
        },
      },
    });

    // Corrige removidos e adicionais e adiciona points
    const itensComNomes = await Promise.all(
      listaDeItens.map(async (item) => {
        const novoItem: ItemPedido = {
          id: item.id,
          price: item.price,
          points: item.points || 0, // pega points se existir
          payWithPoints: item.payWithPoints ?? false,
          product: item.product,
          product2: item.product2 || undefined,
          status: item.status || undefined,
          observacao: item.observacoes || undefined,
          qtd: item.qtd
        };

        // Removidos
        if (Array.isArray(item.removidos)) {
          const idsRemovidos = item.removidos.map((r: any) => r.id);
          const ingredientes = await PrismaClient.ingrediente.findMany({
            where: { id: { in: idsRemovidos } },
            select: { id: true, nome: true },
          });
          novoItem.removidos = ingredientes;
        }

        // Adicionais
        if (Array.isArray(item.adicionais)) {
          const idsAdicionais = item.adicionais.map((a: any) => a.id);
          const adicionais = await PrismaClient.adicional.findMany({
            where: { id: { in: idsAdicionais } },
            select: { id: true, nome: true, price: true },
          });
          novoItem.adicionais = adicionais;
        }

        return novoItem;
      })
    );

    return itensComNomes;
  }
}


export { ListItensPorPedidoService };
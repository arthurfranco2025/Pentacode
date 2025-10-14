import PrismaClient from "../../prisma";

interface PedidoStatusRequest {
  pedido_id: string;
}

class GetPedidoStatusService {
  async execute({ pedido_id }: PedidoStatusRequest) {
    const pedido = await PrismaClient.pedido.findUnique({
      where: { id: pedido_id },
      select: {
        id: true,
        status: true,
        updated_at: true,
      },
    });

    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }

    return pedido;
  }
}

export { GetPedidoStatusService };

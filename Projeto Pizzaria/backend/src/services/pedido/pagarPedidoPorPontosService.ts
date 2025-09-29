import PrismaClient from "../../prisma";

interface PagarRequest {
    pedido_id: string;
}

class PagarPedidoService {
    async execute({ pedido_id }: PagarRequest) {
        if (!pedido_id) {
            throw new Error("Insira o pedido");
        }

        const pedido = await PrismaClient.pedido.findUnique({
            where: { id: pedido_id }
        });

        if (!pedido) {
            throw new Error("Esse pedido não existe");
        }

        // Busca comanda vinculada
        const pedidoComanda = await PrismaClient.pedido.findUnique({
            where: { id: pedido_id },
            select: { comanda_id: true }
        });

        if (!pedidoComanda || !pedidoComanda.comanda_id) {
            throw new Error("Esse pedido não está vinculado a nenhuma comanda");
        }

        const comanda = await PrismaClient.comanda.findUnique({
            where: { id: pedidoComanda.comanda_id }
        });

        if (!comanda) {
            throw new Error("Comanda não encontrada");
        }

        const clienteID = comanda.cliente_id;

        const cliente = await PrismaClient.cliente.findUnique({
            where: { id: clienteID }
        });

        if (!cliente) {
            throw new Error("Cliente não encontrado");
        }

        if (pedido.points > cliente.points) {
            throw new Error("Cliente não tem pontos suficientes");
        }

        if (cliente.points >= pedido.points) {
            await PrismaClient.cliente.update({
                where: { id: clienteID },
                data: {
                    points: {
                        decrement: pedido.points
                    }
                }
            });
        }

        if(pedido.status == 'pedido pago separadamente'){
            throw new Error('Esse pedido já foi pago')
        }

        const comandaAtualizada = await PrismaClient.comanda.update({
            where: { id: comanda.id },
            data: {
                price: {
                    decrement: pedido.price // desconta o valor do pedido pago
                },
                points:{
                    decrement: pedido.points
                }
            }
        });

        // Atualiza o pedido (zera preço/pontos e muda status)
        const pagarPedido = await PrismaClient.pedido.update({
            where: { id: pedido_id },
            data: {
                price: 0,
                points: 0,
                status: "pedido pago separadamente"
            }
        });

        return { pedido: pagarPedido, comanda: comandaAtualizada };
    }
}

export { PagarPedidoService };
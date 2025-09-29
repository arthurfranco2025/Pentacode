import PrismaClient from "../../prisma";

interface EditarPedido {
    pedido_id: string,
}

class EditarPedidoPagoService {
    async execute({ pedido_id }: EditarPedido) {

        if (!pedido_id) {
            throw new Error('Insira um pedido para pagar')
        }

        const pedidoExiste = await PrismaClient.pedido.findFirst({
            where: {
                id: pedido_id
            }
        })

        if (!pedidoExiste) {
            throw new Error('O pedido não existe')
        }

        const editarPedido = await PrismaClient.pedido.update({
            where: {
                id: pedido_id
            },
            data: {
                status: 'pedido pago separadamente',
                price: 0,
                points: 0
            }
        })

        // 1. Pega a comanda associada ao pedido
        const pedidoComanda = await PrismaClient.pedido.findUnique({
            where: { id: pedido_id },
            select: { comanda_id: true }
        });

        if (pedidoComanda?.comanda_id) {
            // 2. Busca todos os pedidos dessa comanda
            const pedidos = await PrismaClient.pedido.findMany({
                where: { comanda_id: pedidoComanda.comanda_id }, // ou comandaId
                select: { price: true, points: true }
            });

            // 3. Soma o preço de todos os pedidos
            const totalComanda = pedidos.reduce((acc, p) => acc + p.price, 0);
            const totalComandaPoints = pedidos.reduce((acc, p) => acc + p.points, 0)

            // 4. Atualiza a comanda com o total
            await PrismaClient.comanda.update({
                where: { id: pedidoComanda.comanda_id },
                data: { price: totalComanda, points: totalComandaPoints }
            });
        }

        return editarPedido

    }
}

export { EditarPedidoPagoService }
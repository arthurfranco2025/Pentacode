import PrismaClient from "../../prisma";

interface ListPedidoRequest {
    comanda_id: string
}

class ListPedidoPorComanda {
    async execute({ comanda_id }: ListPedidoRequest) {

        if (!comanda_id) {
            throw new Error('Insira uma comanda')
        }

        if (comanda_id) {
            const comandaExiste = await PrismaClient.comanda.findUnique({
                where: {
                    id: comanda_id
                }
            })

            if (!comandaExiste) {
                throw new Error('Essa comanda não existe')
            }
        }

        const pedidosPorComanda = await PrismaClient.pedido.findMany({
            where: { comanda_id },
            include: {
                items: true,
            },
        })

        const pedidosComTotal = pedidosPorComanda.map((pedido) => {
            const totalCalculado = pedido.items.reduce((acc, item) => {
                // Ajuste conforme os campos do seu ItemPedido
                return acc + (item.price * item.qtd);
            }, 0);

            return {
                ...pedido,
                total: totalCalculado,
            };
        });

        return pedidosComTotal;
    }
}

export { ListPedidoPorComanda }
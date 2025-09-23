import PrismaClient from '../../prisma'

class ListPedidoGarcomService {
    async execute() {

        const listaDePedidos = await PrismaClient.pedido.findMany({
            where: {
                NOT: {
                    status: 'pedido pago separadamente'
                }
            }
        })

        return listaDePedidos
    }
}

export { ListPedidoGarcomService }

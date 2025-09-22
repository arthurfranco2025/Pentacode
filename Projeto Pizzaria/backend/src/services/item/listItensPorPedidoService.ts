import PrismaClient from "../../prisma";

interface ListarItensRequest {
    pedido_id: string
}

class ListItensPorPedidoService {
    async execute({ pedido_id }: ListarItensRequest) {

        if (!pedido_id) {
            throw new Error('Insira um pedido pra selecionar seus itens')
        }

        const pedidoExiste = await PrismaClient.pedido.findUnique({
            where: {
                id: pedido_id
            }
        })

        if (!pedidoExiste){
            throw new Error('O pedido não existe')
        }

            const listaDeItens = await PrismaClient.item.findMany({
                where: {
                    pedido_id: pedido_id
                }
            })

        return listaDeItens
    }
}

export { ListItensPorPedidoService }
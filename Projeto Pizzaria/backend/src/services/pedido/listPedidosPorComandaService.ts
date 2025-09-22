import PrismaClient from "../../prisma";

interface ListPedidoRequest{
    comanda_id: string
}

class ListPedidoPorComanda{
    async execute({ comanda_id }: ListPedidoRequest){

        if(!comanda_id){
            throw new Error('Insira uma comanda')
        }

        if(comanda_id){
            const comandaExiste = await PrismaClient.comanda.findUnique({
                where:{
                    id: comanda_id
                }
            })

            if(!comandaExiste){
                throw new Error('Essa comanda não existe')
            }
        }

        const pedidosPorComanda = await PrismaClient.pedido.findMany({
            where:{
                comanda_id: comanda_id
            }
        })

        return pedidosPorComanda
    }
}

export { ListPedidoPorComanda }
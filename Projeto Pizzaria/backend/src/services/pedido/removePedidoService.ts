import PrismaClient from "../../prisma";

interface RemovePedido{
    pedido_id: string
}

class RemovePedidoService{
    async execute({pedido_id}: RemovePedido){

        if(!pedido_id){
            throw new Error('Insira o pedido que deseja remover')
        }

        const pedido = await PrismaClient.pedido.findFirst({
            where:{
                id: pedido_id
            }
        })

        if(!pedido){
            throw new Error('Esse pedido não existe')
        }

        if(pedido.status !== 'pedido realizado'){
            throw new Error('Esse pedido não pode ser removido pois já entrou em produção')
        }

        await PrismaClient.item.deleteMany({
            where: {
                pedido_id: pedido_id
            }
        })

        await PrismaClient.comanda.update({
            where:{
                id: pedido.comanda_id
            },
            data:{
                price:{
                    decrement: pedido.price
                },
                points:{
                    decrement: pedido.points
                }
            }
        })

        const removePedido = await PrismaClient.pedido.delete({
            where: {
                id: pedido_id
            }
        })

        return removePedido
    }
}

export { RemovePedidoService }
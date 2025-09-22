import PrismaClient from "../../prisma";

interface PagarRequest{
    pedido_id: string
}

class PagarPedidoService{
    async execute({pedido_id}: PagarRequest){

        if(!pedido_id){
            throw new Error('Insira o pedido')
        }

        const pedido = await PrismaClient.pedido.findFirst({
            where:{
                id: pedido_id
            }
        })

        if(!pedido){
            throw new Error('Essa pedido não existe')
        }

        const pagarPedido = await PrismaClient.pedido.update({
            where:{
                id: pedido_id
            },
            data:{
                status: 'aguardando pagamento'
            },
            select:{
                id: true,
                cliente_id: true,
                status: true
            }
        })

        return pagarPedido
    }
}

export { PagarPedidoService }
import PrismaClient from "../../prisma";

interface PagarRequest{
    comanda_id: string
}

class PagarComandaService{
    async execute({comanda_id}: PagarRequest){

        if(!comanda_id){
            throw new Error('Insira a comanda')
        }

        const comanda = await PrismaClient.comanda.findFirst({
            where:{
                id: comanda_id
            }
        })

        if(!comanda){
            throw new Error('Essa comanda não existe')
        }

        const pagarComanda = await PrismaClient.comanda.update({
            where:{
                id: comanda_id
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

        return pagarComanda
    }
}

export { PagarComandaService }
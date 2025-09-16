import PrismaClient from '../../prisma'

interface CreateItemAdicionalRequest{
    item_id: string,
    adicional_id: string,
    qtd: number
}

class CreateItemAdicionalService{
    async execute({item_id, adicional_id, qtd} : CreateItemAdicionalRequest){

        const itemExiste = await PrismaClient.item.findFirst({
            where:{
                id: item_id
            }
        })

        

        if(!itemExiste){
            throw new Error('O item não existe')
        }

        const adicionalExiste = await PrismaClient.adicional.findFirst({
            where:{
                id: adicional_id
            }
        })

        if(!adicionalExiste){
            throw new Error('O adicional não existe')
        }

        if(!item_id){
            throw new Error('Precisa de um item')
        }

        if(!adicional_id){
            throw new Error('Precisa de adicional')
        }

        const item_adicional = await PrismaClient.item_adicional.create({
            data:{
                item_id: item_id,
                adicional_id: adicional_id,
                qtd: qtd
            }
        })

        return item_adicional
    }
}

export { CreateItemAdicionalService }

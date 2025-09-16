import PrismaClient from '../../prisma'

interface RemoveItemAdicionalRequest{
    ItemAdicional_id: string
}

class RemoveItemAdicional{
    async execute({ItemAdicional_id}: RemoveItemAdicionalRequest){

        if(!ItemAdicional_id){
            throw new Error('Insira o adicional que você deseja remover')
        }

        const itemAdicionalExiste = await PrismaClient.item_adicional.findFirst({
            where:{
                id: ItemAdicional_id
            }
        })

        if(!itemAdicionalExiste){
            throw new Error('Esse adicional não existe mais')
        }

        const deletedItemAdicional = await PrismaClient.item_adicional.delete({
            where: {
                id: ItemAdicional_id
            }
        })

        return deletedItemAdicional
    }
}

export { RemoveItemAdicional }
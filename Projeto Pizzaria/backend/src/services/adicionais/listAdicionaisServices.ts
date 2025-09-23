import PrismaClient from '../../prisma'

class ListAdicionaisService{
    async execute(){

        const listAdicionais = await PrismaClient.adicional.findMany({})

        return listAdicionais
    }
}

export { ListAdicionaisService }
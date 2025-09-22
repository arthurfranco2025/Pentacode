import PrismaClient from '../../prisma'

class ListComandaService{
    async execute(){

        const listaDeComanda = await PrismaClient.comanda.findMany({
            where:{
                status: 'aberta'
            }
        })

        return listaDeComanda
    }
}

export { ListComandaService }
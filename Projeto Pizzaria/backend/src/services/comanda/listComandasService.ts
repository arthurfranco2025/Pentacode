import PrismaClient from '../../prisma'

class ListComandaService{
    async execute(){

        const listaDeComanda = await PrismaClient.comanda.findMany({
            where:{
                status: {
                    not: 'fechada'
                }
            }
        })

        return listaDeComanda
    }
}

export { ListComandaService }
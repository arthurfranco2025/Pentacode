import PrismaClient from '../../prisma'

interface PagarComandaRequest{
    comanda_id: string
}

class PagarComandaPorPontosService{
    async execute({comanda_id} : PagarComandaRequest){

		const comanda = await PrismaClient.comanda.findUnique({
			where: {
				id: comanda_id
			}
		})

		if (!comanda) {
			throw new Error('Comanda não encontrada')
		}

		const clienteId = comanda.cliente_id

        const Cliente = await PrismaClient.cliente.findFirst({
            where:{
                id: clienteId
            }
        })

        if(comanda.points > Cliente.points){
            throw new Error('O cliente não tem pontos suficientes pra pagar essa comanda')
        }

        if(comanda.status == 'fechada'){
            throw new Error('Essa comanda está fechada')
        }

        if(Cliente.points > comanda.points || Cliente.points === comanda.points){

            await PrismaClient.cliente.update({
                where:{
                    id: clienteId
                },
                data:{
                    points:{
                        decrement: comanda.points
                    }
                }
            })   
            
            const comandaAtualizada = await PrismaClient.comanda.update({
                where: {
                    id: comanda_id
                },
                data:{
                    status: 'comanda paga por pontos'
                }
            })

            return comandaAtualizada
        }

        
    }
}

export { PagarComandaPorPontosService }
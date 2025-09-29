import PrismaCliente from '../../prisma'

interface AvaliacaoRequest{
    comanda_id: string
    nota: number,
    descricao?: string
}

class CreateAvalicaoService{
    async execute({comanda_id, nota, descricao} : AvaliacaoRequest){

        if(!comanda_id){
            throw new Error('Insira a comanda para a avaliação')
        }

        if(nota){
            throw new Error('De uma nota para a comanda')
        }

        const comanda = await PrismaCliente.comanda.findFirst({
            where:{
                id: comanda_id
            }
        })

        if(!comanda){
            throw new Error('Essa comanda não existe')
        }

        if(comanda.status !== 'fechada'){
            throw new Error('Não é possível dar nota a uma comanda aberta ou esperando pagamento')
        }

        const avaliacao = await PrismaCliente.avaliacao.create({
            data:{
                nota: nota,
                descricao: descricao,
                comanda_id: comanda_id,
                cliente_id: comanda.cliente_id
            }
        })

        return avaliacao
    }
}

export { CreateAvalicaoService }
import PrismaClient from "../../prisma";

interface EditRequest {
    adicional_id: string,
    price: number
}

class EditAdicionalService {
    async execute({ adicional_id, price }: EditRequest) {

        const adicional = await PrismaClient.adicional.findFirst({
            where:{
                id: adicional_id,
            }
        })

        if(!adicional){
            throw new Error('Esse adicional não existe')
        }

        if(!adicional_id){
            throw new Error('Precisa de um Adicional')
        }

        if(adicional.price == price) {
            throw new Error("O novo preço deve ser diferente do antigo preço")
        }

        if(!price){
            throw new Error ("Insira um preço novo")
    }
        const novoPreco = await PrismaClient.adicional.update({
            where: {
                id: adicional_id,
            },
            data: {
                price: price
            },
            select:{
                id: true,
                price: true
            }
        })

        return novoPreco
    }
}

export { EditAdicionalService }
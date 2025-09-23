import PrismaClient from "../../prisma";

interface EditRequest {
    ingrediente_id: string,
    price: number
}

class EditIngredienteService {
    async execute({ ingrediente_id, price }: EditRequest) {

        const ingrediente = await PrismaClient.ingrediente.findFirst({
            where:{
                id: ingrediente_id,
            }
        })

        if(!ingrediente){
            throw new Error('Esse ingrediente não existe')
        }

        if(!ingrediente_id){
            throw new Error('Precisa de um Ingrediente')
        }

        if(!price){
            throw new Error('Adicione o novo preço')
        }

        if(ingrediente.price == price){
            throw new Error("O novo preço deve ser diferente do antigo preço")
        }

        const novoPreco = await PrismaClient.ingrediente.update({
            where: {
                id: ingrediente_id
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

export { EditIngredienteService }
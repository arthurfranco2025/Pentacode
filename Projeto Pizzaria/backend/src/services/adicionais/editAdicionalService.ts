import PrismaClient from "../../prisma";

interface EditRequest {
    adicional_id: string,
    price: number,
    points: number
}

class EditAdicionalService {
    async execute({ adicional_id, price, points }: EditRequest) {

        const adicional = await PrismaClient.adicional.findFirst({
            where:{
                id: adicional_id
            }
        })

        if(!adicional){
            throw new Error('Esse adicional não existe')
        }

        if(!adicional_id){
            throw new Error('Precisa de um Adicional')
        }

        const novoPreco = await PrismaClient.adicional.update({
            where: {
                id: adicional_id
            },
            data: {
                price: price,
                points: points
            },
            select:{
                id: true,
                price: true,
                points: true
            }
        })

        return novoPreco
    }
}

export { EditAdicionalService }
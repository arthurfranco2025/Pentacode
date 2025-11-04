import prismaClient from "../../prisma";

interface createAdicionaisRequest {
    name: string;
    price: number;
    points: number;
}

class CreateAdicionalService {
    async execute({ name, price, points }: createAdicionaisRequest) {

        if (!name) {
            throw new Error("Insira o nome do ingrediente");
        }

        if (price === undefined || price === null) {
            throw new Error("Insira o preço do ingrediente");
        }

        if (points === undefined || points === null) {
            throw new Error('Insira os pontos do produto')
        }

        if(name){
            const adicionalAlreadyExists = await prismaClient.adicional.findFirst({
                where:{
                    nome: name
                }
            })

            if (adicionalAlreadyExists) {
                throw new Error("O adicional já existe");
            }
        }


        const adicional = await prismaClient.adicional.create({
            data: {
                nome: name,
                price: price,
                points: points
            }
        })

        return adicional
    }
}

export { CreateAdicionalService }
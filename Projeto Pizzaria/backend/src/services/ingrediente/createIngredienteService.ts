import prismaClient from "../../prisma";

interface createIngredienteRequest {
    name: string;
    price: number;
}

class CreateIngredienteService {
    async execute({ name, price }: createIngredienteRequest) {

        if (!name) {
            throw new Error("Insira o nome do ingrediente");
        }

        if (!price) {
            throw new Error("Insira o preço do ingrediente");
        }

        if(name){
            const productAlreadyExists = await prismaClient.ingrediente.findFirst({
                where:{
                    nome: name
                }
            })

            if (productAlreadyExists) {
                throw new Error("Ingrediente já existe");
            }
        }


        const ingrediente = await prismaClient.ingrediente.create({
            data: {
                nome: name,
                price: price
            }
        })

        return ingrediente
    }
}

export { CreateIngredienteService }
import prismaClient from "../../prisma";

interface createAdicionaisRequest {
    name: string;
    price: number;
}

class CreateAdicionalService {
    async execute({ name, price }: createAdicionaisRequest) {

        if (!name) {
            throw new Error("Insira o nome do ingrediente");
        }

        if (!price) {
            throw new Error("Insira o preço do ingrediente");
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
                price: price
            }
        })

        return adicional
    }
}

export { CreateAdicionalService }
import prismaClient from "../../prisma";

interface createRequest {
    name: string;
    price: number;
    points: number;
    description: string;
    promocao?: boolean;
    category_id: string;
}

class CreateProductService {
    async execute({ name, price, points, description, promocao, category_id }: createRequest) {

        if (!name) {
            throw new Error("Insira o nome do produto");
        }

        if (!price) {
            throw new Error("Insira o preço do produto");
        }

        if (!points) {
            throw new Error("Insira os pontos do produto");
        }

        if(name){
            const productAlreadyExists = await prismaClient.product.findFirst({
                where:{
                    name: name
                }
            })

            if (productAlreadyExists) {
                throw new Error("Produto já existe");
            }
        }


        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                points: points,
                description: description,
                promocao: promocao,
                category_id: category_id
            }
        })

        return product
    }
}

export { CreateProductService }
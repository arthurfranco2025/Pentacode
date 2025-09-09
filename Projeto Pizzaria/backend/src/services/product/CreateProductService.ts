import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    price: string;
    description: string;
    category_id: string;
    points?: string | number;
    promocao?: boolean;
}

class CreateProductService{
    async execute({name, price, description, category_id, points, promocao}: ProductRequest){
        const numericPrice = Number(price)
        if (isNaN(numericPrice)) {
            throw new Error("Preço inválido")
        }

        const numericPoints = points !== undefined ? Number(points) : 0
        if (isNaN(numericPoints)) {
            throw new Error("Pontos inválidos")
        }

        const isPromocao = Boolean(promocao)

        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: numericPrice,
                points: numericPoints,
                description: description,
                promocao: isPromocao,
                category_id: category_id,
            }
        })
        return product
    }
}

export {CreateProductService}
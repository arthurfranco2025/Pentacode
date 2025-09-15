import prismaClient from "../../prisma";

interface editRequest {
    id: string;
    name?: string;
    price?: number;
    points?: number;
    description?: string;
    promocao?: boolean;
    category_id?: string;
}

class EditProductService {
    async execute({ id, name, price, points, description, promocao, category_id }: editRequest) {

        const product = await prismaClient.product.findUnique({
            where: {
                id: id
            }
        })

        if (!product) {
            throw new Error("Produto não encontrado");
        }

        if(promocao == true){
            if(price > product.price){
                throw new Error("O preço promocional deve ser menor que o preço original.");
            }
        }

        const updatedProduct = await prismaClient.product.update({
            where: {
                id: id
            },
            data: {
                name: name ? name : product.name,
                price: price ? price : product.price,
                points: points ? points : product.points,
                description: description ? description : product.description,
                promocao: promocao !== undefined ? promocao : product.promocao,
                category_id: category_id ? category_id : product.category_id
            }
        })

        return updatedProduct
    }
}

export { EditProductService }

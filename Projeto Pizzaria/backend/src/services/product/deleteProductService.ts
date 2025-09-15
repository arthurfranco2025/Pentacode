import PrismaClient from '../../prisma';

interface DeleteRequest {
    product_id: string;
}

class DeleteProductService{
    async execute({product_id}: DeleteRequest){

        const product = await PrismaClient.product.findUnique({
            where: {
                id: product_id
            }
        })

        if (!product) {
            throw new Error("Produto não encontrado");
        }

        await PrismaClient.product.delete({
            where: {
                id: product_id
            }
        })

        return { message: "Produto deletado" }
    }
}

export { DeleteProductService }
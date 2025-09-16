import PrismaClient from '../../prisma';

interface DeleteRequest {
    produtoIngrediente_id: string;
}

class DeleteProductIngredienteService{
    async execute({produtoIngrediente_id}: DeleteRequest){

        const produto_ingrediente = await PrismaClient.product_ingrediente.findUnique({
            where: {
                id: produtoIngrediente_id
            }
        })

        if (!produto_ingrediente) {
            throw new Error("Ingrediente não encontrado");
        }

        await PrismaClient.product_ingrediente.delete({
            where: {
                id: produtoIngrediente_id
            }
        })

        return { message: "Relação de ingrediente e produto deletada" }
    }
}

export { DeleteProductIngredienteService }
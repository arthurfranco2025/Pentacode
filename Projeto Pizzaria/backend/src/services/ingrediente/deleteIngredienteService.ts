import PrismaClient from '../../prisma';

interface DeleteRequest {
    ingrediente_id: string;
}

class DeleteIngredienteService{
    async execute({ingrediente_id}: DeleteRequest){

        const ingrediente = await PrismaClient.ingrediente.findUnique({
            where: {
                id: ingrediente_id
            }
        })

        if (!ingrediente) {
            throw new Error("Ingrediente não encontrado");
        }

        await PrismaClient.ingrediente.delete({
            where: {
                id: ingrediente_id
            }
        })

        return { message:  `Ingrediente Deletado: ${ingrediente.nome}` }
    }
}

export { DeleteIngredienteService }
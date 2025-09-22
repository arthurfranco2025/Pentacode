import PrismaClient from '../../prisma';

interface DeleteRequest {
    adicional_id: string;
}

class DeleteAdicionalService{
    async execute({adicional_id}: DeleteRequest){

        const adicional = await PrismaClient.adicional.findUnique({
            where: {
                id: adicional_id
            }
        })

        if (!adicional) {
            throw new Error("Adicional não encontrado");
        }

        await PrismaClient.adicional.delete({
            where: {
                id: adicional_id
            }
        })

        return { message: `Adicional Deletado: ${adicional.nome}` }
    }
}

export { DeleteAdicionalService }
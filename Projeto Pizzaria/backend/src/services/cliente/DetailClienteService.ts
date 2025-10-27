import prismaClient from '../../prisma';

class DetailClienteService {
    async execute(cliente_id: string) {
        const cliente = await prismaClient.cliente.findFirst({
            where: {
                id: cliente_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                cpf: true,
                data_nasc: true,
                created_at: true,
                updated_at: true
            }
        });

        return cliente;
    }
}

export { DetailClienteService }
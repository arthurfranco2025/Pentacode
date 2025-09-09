import { PrismaClient } from "@prisma/client";

interface OpenComandaRequest {
    cliente_id: string;
}

class OpenComandaService {
    async execute({ cliente_id }: OpenComandaRequest) {
        if (!cliente_id) {
            throw new Error("Cliente ID obrigatório.");
        }

        const clienteExists = await PrismaClient.cliente.findUnique({
            where: { id: cliente_id }
        });

        if (!clienteExists) {
            throw new Error("Cliente não encontrado.");
        }

        const comanda = await PrismaClient.comanda.create({
            data: {
                cliente_id: cliente_id,
                status: "open",
                price: 0,
                points: 0,
            },
            select: {
                id: true,
                cliente_id: true,
                created_at: true,
            }
        });

        return comanda;
    }
}

export { OpenComandaService };
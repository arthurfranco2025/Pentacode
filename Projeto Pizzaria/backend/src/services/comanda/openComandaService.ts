import PrismaClient from "../../prisma";

interface ComandaRequest {
    cliente_id: string;
    mesa_id: string; 
}

class OpenComandaService {
    async execute({ cliente_id, mesa_id }: ComandaRequest) {

        if(!mesa_id){
            throw new Error('Insira uma mesa')
        }

        if (!cliente_id) {
            throw new Error('Id do cliente é obrigatório');
        }

        const clienteExists = await PrismaClient.cliente.findFirst({
            where: { id: cliente_id }
        });

        if (!clienteExists) {
            throw new Error("Cliente não encontrado");
        }

        // Verifica se já existe comanda aberta para esse cliente e mesa
        const comandaExistente = await PrismaClient.comanda.findFirst({
            where: {
                cliente_id,
                status: "aberta"
            }
        });

        if (comandaExistente) {
            throw new Error('Feche sua comanda para abrir outra');
        }

        // Cria a comanda
        const comanda = await PrismaClient.comanda.create({
            data: {
                status: "aberta",
                price: 0,
                points: 0,
                cliente: { connect: { id: cliente_id } },
                mesa: mesa_id ? { connect: { id: mesa_id } } : undefined
            },
            select: {
                id: true,
                cliente_id: true,
                mesa_id: true
            }
        });

        return comanda;
    }
}

export { OpenComandaService };
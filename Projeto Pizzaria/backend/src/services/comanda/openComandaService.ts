import PrismaClient from "../../prisma";

interface ComandaRequest {
    cliente_id: string;
}

class OpenComandaService {
    async execute({ cliente_id }: ComandaRequest) {

        if (cliente_id) {
            const clienteExists = await PrismaClient.cliente.findFirst({
                where: {
                    id: cliente_id
                }
            });
            if (!clienteExists) {
                throw new Error("Cliente não encontrado");
            }
        }

        if (!cliente_id) {
            throw new Error('Id do cliente é obrigatório')
        }

        const comandaExistente = await PrismaClient.comanda.findFirst({
            where: {
                cliente_id,
                status: "aberta" // ou o valor que você definiu no banco
            }
        });

        if(comandaExistente){
            throw new Error('Feche sua comanda para abrir outra')
        }

        const comanda = await PrismaClient.comanda.create({
            data: {
                status: "aberta",
                price: 0,
                points: 0,
                pedido: {},
                cliente: { connect: { id: cliente_id } }
            },
            select: {
                id: true,
                cliente_id: true,
            }
        });

        return comanda;
    }
}

export { OpenComandaService }
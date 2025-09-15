import PrismaClient from "../../prisma";

interface ComandaRequest {
    cliente_id: string;
}

class CloseComandaService {
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

        const comandaFechada = await PrismaClient.comanda.findFirst({
            where:{
                cliente_id: cliente_id,
                status: "fechada"
            }
        })

        if(comandaFechada){
            throw new Error('Essa comanda já está fechada')
        }

        if (!cliente_id) {
            throw new Error('Id do cliente é obrigatório')
        }

        // Find the comanda by cliente_id to get its unique id
        const comandaToUpdate = await PrismaClient.comanda.findFirst({
            where: {
                cliente_id: cliente_id,
                status: "aberta"
            }
        });

        if (!comandaToUpdate) {
            throw new Error("Comanda não encontrada para este cliente");
        }

        const comanda = await PrismaClient.comanda.update({
            where: {
                id: comandaToUpdate.id
            },
            data: {
                status: "fechada",
                pedido: {},
                cliente: { connect: { id: cliente_id } }
            },
            select: {
                id: true,
                cliente_id: true,
                status: true
            }
        });

        return comanda;
    }
}

export { CloseComandaService }
import PrismaClient from "../../prisma";

interface ComandaRequest {
    comanda_id: string;
}

class CloseComandaService {
    async execute({ comanda_id }: ComandaRequest) {

        if (comanda_id) {
            const comandaExists = await PrismaClient.comanda.findFirst({
                where: {
                    id: comanda_id
                }
            });
            if (!comandaExists) {
                throw new Error("Comanda não encontrado");
            }
        }

        const comandaFechada = await PrismaClient.comanda.findFirst({
            where:{
                id: comanda_id,
            },
            select:{
                status: true
            }
        })

        if(comandaFechada.status == 'fechada'){
            throw new Error('Essa comanda já está fechada')
        }

        if (!comanda_id) {
            throw new Error('Id da comanda é obrigatório')
        }

        // Find the comanda by cliente_id to get its unique id
        const comandaToUpdate = await PrismaClient.comanda.findFirst({
            where: {
                id: comanda_id 
            }
        });

        if (!comandaToUpdate) {
            throw new Error("Comanda não encontrada ");
        }

        const comanda = await PrismaClient.comanda.update({
            where: {
                id: comandaToUpdate.id
            },
            data: {
                status: "fechada",
                pedido: {},
                cliente: { connect: { id: comandaToUpdate.cliente_id } }
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
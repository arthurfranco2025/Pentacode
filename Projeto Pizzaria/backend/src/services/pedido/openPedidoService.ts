import PrismaClient from "../../prisma";
import { OpenComandaController } from "../../controllers/comanda/openComandaController";

interface PedidoRequest {
    cliente_id: string;
    
}

class OpenPedidoService {
    async execute({ cliente_id, }: PedidoRequest) {
        if (!cliente_id) {
            throw new Error('Id do cliente é obrigatório');
        }

        const clienteExists = await PrismaClient.cliente.findFirst({
            where: { id: cliente_id }
        });

        if (!clienteExists) {
            throw new Error("Cliente não encontrado");
        }

        // Verifica se já existe uma comanda aberta
        let comanda = await PrismaClient.comanda.findFirst({
            where: {
                cliente_id,
                status: "aberta"
            }
        });

        // Cria o pedido
        const pedido = await PrismaClient.pedido.create({
            data: {
                status: "pedido realizado",
                price: 0,
                points: 0,
                cliente: { connect: { id: cliente_id } },
                comanda: { connect: { id: comanda.id } }
            },
            select: {
                id: true,
                cliente_id: true,
                comanda: true,
                price: true
            }
        });

        return pedido;
    }
}

export { OpenPedidoService }
import PrismaClient from "../../prisma";
import { OpenComandaController } from "../../controllers/comanda/openComandaController";

interface PedidoRequest {
    cliente_id: string;
}

class OpenPedidoService {
    async execute({ cliente_id }: PedidoRequest) {

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
                status: "aberta" 
            }
        });

        if(!comandaExistente){
            // Simulate req and res objects for controller usage
            const req = { body: { cliente_id } } as any;
            const res = {
                json: (data: any) => data
            } as any;
            await new OpenComandaController().handle(req, res);
        }

        const pedido = await PrismaClient.pedido.create({
            data: {
                status: "pedido realizado",
                price: 0,
                points: 0,
                items: {},
                cliente: { connect: { id: cliente_id } },
                comanda: { connect: { id: comandaExistente.id } }
            },
            select: {
                id: true,
                cliente_id: true,
                comanda: true
            }
        });

        return pedido;
    }
}

export { OpenPedidoService }
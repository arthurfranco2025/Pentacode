import PrismaClient from "../../prisma";

interface PedidoRequest {
    cliente_id: string;
    
}

class OpenPedidoService {
    async execute({ cliente_id }: PedidoRequest) {
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
        const comanda = await PrismaClient.comanda.findFirst({
            where: {
                cliente_id,
                status: "aberta"
            }
        });

        if (!comanda) {
            // Não faz sentido abrir um pedido sem uma comanda aberta
            throw new Error("Nenhuma comanda aberta para este cliente");
        }

        // Cria o pedido e conecta explicitamente à comanda encontrada
        const pedido = await PrismaClient.pedido.create({
            data: {
                status: "pedido em andamento",
                price: 0,
                points: 0,
                cliente: { connect: { id: cliente_id } },
                comanda: { connect: { id: comanda.id } }
            },
            select: {
                id: true,
                cliente_id: true,
                comanda: true,
                price: true,
                status: true,
            }
        });

        return pedido;
    }
}

export { OpenPedidoService }
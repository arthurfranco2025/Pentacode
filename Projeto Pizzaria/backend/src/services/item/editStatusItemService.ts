import PrismaClient from '../../prisma'

interface EditItemStatusRequest {
    item_id: string;
    status: string;
}

class EditItemStatusService {
    async execute({ item_id, status }: EditItemStatusRequest) {

        if (!status) {
            throw new Error('Insira o status do item');
        }

        const statusValidos = [
            'Na fila',
            'Em produção',
            'Parcialmente pronto',
            'Pronto',
            'Entregue',
            'Cancelado'
        ];

        if (!statusValidos.includes(status)) {
            throw new Error('Status inválido. Válidos: ' + statusValidos.join(', '));
        }

        const item = await PrismaClient.item.findUnique({
            where: { id: item_id }
        });

        if (!item) {
            throw new Error('Item não encontrado');
        }

        const editItem = await PrismaClient.item.update({
            where: { id: item_id },
            data: { status }
        });

        const pedido = await PrismaClient.pedido.findUnique({
            where: { id: item.pedido_id }
        });

        if (!pedido) {
            throw new Error('Pedido relacionado não encontrado');
        }

        const itensPedido = await PrismaClient.item.findMany({
            where: { pedido_id: pedido.id }
        });

        // Atualiza status do pedido baseado nos itens
        if (itensPedido.every(i => i.status === 'Pronto')) {
            await PrismaClient.pedido.update({
                where: { id: pedido.id },
                data: { status: 'Pedido pronto' }
            });
        } else if (status === 'Em produção' || 'Pronto' || 'Parcialmente pronto') {
            await PrismaClient.pedido.update({
                where: { id: pedido.id },
                data: { status: 'Pedido em preparo' }
            });
        } else if (itensPedido.every(i => i.status === 'Entregue')) {
            await PrismaClient.pedido.update({
                where: { id: pedido.id },
                data: { status: 'Aguardando pagamento' }
            });
        }

        return editItem;
    }
}

export { EditItemStatusService };

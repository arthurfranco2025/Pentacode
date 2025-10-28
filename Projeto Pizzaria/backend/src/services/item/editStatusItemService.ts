import PrismaClient from '../../prisma'

interface EditItemStatusRequest {
    item_id: string;
    status: string;
}

class EditItemStatusService {
    async execute({ item_id, status }: EditItemStatusRequest) {

        const item = await PrismaClient.item.findUnique({
            where: { id: item_id }
        })

        if (!item) {
            throw new Error('Item não encontrado')
        }

        if(!status) {
            throw new Error('Insira o status do item')
        }

        const statusValidos = [
            'Na fila',
            'Em produção',
            'Parcialmente pronto',
            'Pronto',
            'Entregue',
            'Cancelado'
        ]

        if(!statusValidos.includes(status)) {
            throw new Error('Status inválido. Válidos: ' + statusValidos.join(', '))
        }

        const editItem = await PrismaClient.item.update({
            where: { id: item_id },
            data: {
                status: status
            }
        })

        return editItem
    }
}

export { EditItemStatusService }
import PrismaClient from "../../prisma";

interface EditStatusPedidoRequest {
    pedido_id: string,
    status: string
}

//OPÇÕES DE STATUS
//-pedido realizado
//-pedido em preparo
//-pedido pronto
//-aguardando pagamento
//-pedido pago separadamente

class EditPedidoStatusService {
    async execute({ pedido_id, status }: EditStatusPedidoRequest) {

        if (!status) {
            throw new Error('Insira o status do pedido')
        }

        if (!pedido_id) {
            throw new Error('Insira um pedido')
        }

        const pedidoExiste = await PrismaClient.pedido.findFirst({
            where: {
                id: pedido_id
            }
        })

        if (!pedidoExiste) {
            throw new Error('Esse pedido não existe')
        }

        const statusValidos = [
            'Pedido realizado',
            'Pedido em preparo',
            'Pedido pronto',
            'Aguardando pagamento',
            'Pedido pago separadamente'
          ]
          
          if (!statusValidos.includes(status)) {
            throw new Error('Status inválido. Válidos: ' + statusValidos.join(', '))
          }

        const EditPedido = await PrismaClient.pedido.update({
            where: {
                id: pedido_id
            },
            data: {
                status: status
            }
        })

        return EditPedido
    }
}

export { EditPedidoStatusService }
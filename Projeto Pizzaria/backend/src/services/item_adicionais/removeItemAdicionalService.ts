import PrismaClient from '../../prisma'

interface RemoveItemAdicionalRequest {
    ItemAdicional_id: string
}

class RemoveItemAdicional {
    async execute({ ItemAdicional_id }: RemoveItemAdicionalRequest) {

        if (!ItemAdicional_id) {
            throw new Error('Insira o adicional que você deseja remover')
        }

        // Busca o item adicional e o item vinculado
        const itemAdicionalExiste = await PrismaClient.item_adicional.findFirst({
            where: { id: ItemAdicional_id },
            include: {
                item: { include: { pedido: true } }
            }
        })

        if (!itemAdicionalExiste) {
            throw new Error('Esse adicional não existe mais')
        }

        // Deleta o item adicional
        const deletedItemAdicional = await PrismaClient.item_adicional.delete({
            where: { id: ItemAdicional_id }
        })

        // Busca o adicional para calcular o valor a decrementar
        const adicional = await PrismaClient.adicional.findFirst({
            where: { id: itemAdicionalExiste.adicional_id }
        })

        if (adicional) {
            const valorDecremento = adicional.price * itemAdicionalExiste.qtd
            const pontosDecremento = adicional.points * itemAdicionalExiste.qtd

            // Atualiza o pedido
            const pedidoAtualizado = await PrismaClient.pedido.update({
                where: { id: itemAdicionalExiste.item.pedido_id },
                data: {
                    price: { decrement: valorDecremento },
                    points: { decrement: pontosDecremento }
                }
            })

            // Nota: não restauramos pontos referentes a adicionais aqui. Pontos são decrementados
            // apenas no momento do pagamento — restaurá-los sem confirmação de pagamento
            // poderia resultar em ganho indevido de pontos pelo cliente.

            // Atualiza a comanda (recalculando todos os pedidos)
            if (pedidoAtualizado.comanda_id) {
                const pedidosComanda = await PrismaClient.pedido.findMany({
                    where: { comanda_id: pedidoAtualizado.comanda_id }
                })

                const totalComanda = pedidosComanda.reduce((acc, p) => acc + (p.price ?? 0), 0)
                const totalComandaPoints = pedidosComanda.reduce((acc, p) => acc + (p.points ?? 0), 0)

                await PrismaClient.comanda.update({
                    where: { id: pedidoAtualizado.comanda_id },
                    data: {
                        price: totalComanda,
                        points: totalComandaPoints
                    }
                })
            }
        }

        return deletedItemAdicional
    }
}

export { RemoveItemAdicional }
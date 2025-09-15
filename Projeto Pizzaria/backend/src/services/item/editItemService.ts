import PrismaClient from "../../prisma";

interface EditItemRequest {
    id: string,
    product_id?: string,
    qtd?: number,
    price: number
}

//se for editar separadamente o front ve dps
class EditItemService {
    async execute({ id, product_id, qtd }: EditItemRequest) {

        const Item = await PrismaClient.item.findUnique({
            where: { 
                id: id
            },
        });


        if (id) {

            if (!Item || id !== Item.id) {
                throw new Error('O item não existe')
            }
        }

        if (!Item) {
            throw new Error("O item não existe");
        }

        // Agora usa o pedido_id que veio do banco
        const statusPedido = await PrismaClient.pedido.findUnique({
            where: { id: Item.pedido_id },
            select: { status: true },
        });

        if (!statusPedido) {
            throw new Error("Pedido não encontrado");
        }

        if (statusPedido.status !== "pedido realizado") {
            throw new Error("O pedido já entrou em produção");
        }

        if (product_id === Item.product_id && qtd === Item.qtd) {
            console.log('Você editou o item, mas colocou as mesmas informações')
        }

        const Produto = await PrismaClient.product.findUnique({
            where:{
                id: product_id
            }
        })

        const precoAtualizado = qtd * Produto.price


        const item = await PrismaClient.item.update({
            where: {
                id: id
            },
            data: {
                product_id: product_id,
                qtd: qtd,
                price: precoAtualizado
            }
        })

        return item

    }
}

export { EditItemService }
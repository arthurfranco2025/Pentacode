import  PrismaClient  from "../../prisma";

interface CreateItemRequest {
    product_id: string,
    pedido_id: string,
    qtd: number
}

class CreateItemService {
    async execute({ product_id, pedido_id, qtd }: CreateItemRequest) {

        if (qtd == 0) {
            throw new Error('Não é possível ter 0 como quantidade')
        }

        if (!qtd) {
            throw new Error('Insira uma quatidade')
        }

        if (!pedido_id) {
            throw new Error('É preciso ter um pedido pra criar um item')
        }

        if (!product_id) {
            throw new Error('É preciso ter um produto')
        }

        if (pedido_id) {

            const pedidoExiste = await PrismaClient.pedido.findFirst({
                where: {
                    id: pedido_id
                }
            })

            if (!pedidoExiste) {
                throw new Error('O pedido não existe')
            }
        }

        const produtoPreco = await PrismaClient.product.findUnique({
            where: { id: product_id },
            select: { price: true } // pega apenas o preço
        });

        const precoFinal = qtd * (produtoPreco?.price ?? 0);


        if (product_id) {

            const produtoExiste = await PrismaClient.product.findFirst({
                where: {
                    id: product_id
                }
            })

            if (!produtoExiste) {
                throw new Error('O produto não existe')
            }
        }




        const item = await PrismaClient.item.create({
            data: {
                Item_adicional: {},
                pedido: { connect: { id: pedido_id } },
                product: { connect: { id: product_id } },
                qtd: qtd,
                price: precoFinal
            },
            select: {
                id: true,
                product_id: true,
                qtd: true,
                price: true,
                pedido_id: true
            }
        })

        return item
    }
}

export { CreateItemService }
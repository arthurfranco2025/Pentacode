import PrismaClient from "../../prisma";

interface CreateItemRequest {
    product_id: string;
    pedido_id: string;
    qtd: number;
}

class CreateItemService {
    async execute({ product_id, pedido_id, qtd }: CreateItemRequest) {
        if (qtd === 0) {
            throw new Error("Não é possível ter 0 como quantidade");
        }

        if (!qtd) {
            throw new Error("Insira uma quantidade");
        }

        if (!pedido_id) {
            throw new Error("É preciso ter um pedido pra criar um item");
        }

        if (!product_id) {
            throw new Error("É preciso ter um produto");
        }

        // garante que o pedido existe
        const pedidoExiste = await PrismaClient.pedido.findUnique({
            where: { id: pedido_id }
        });

        if (!pedidoExiste) {
            throw new Error("O pedido não existe");
        }

        // busca o produto e o preço
        const produto = await PrismaClient.product.findUnique({
            where: { id: product_id },
            select: { price: true }
        });

        if (!produto) {
            throw new Error("O produto não existe");
        }

        const precoFinal = qtd * produto.price;

        // cria o item
        const item = await PrismaClient.item.create({
            data: {
                pedido: { connect: { id: pedido_id } },
                product: { connect: { id: product_id } },
                qtd,
                price: precoFinal
            },
            select: {
                id: true,
                product_id: true,
                qtd: true,
                price: true,
                pedido_id: true
            }
        });

        // agora sim, recalcula o total do pedido incluindo esse novo item
        const itens = await PrismaClient.item.findMany({
            where: { pedido_id }
        });

        const total = itens.reduce((acc, i) => acc + i.price, 0);

        await PrismaClient.pedido.update({
            where: { id: pedido_id },
            data: { price: total }
        });

        await PrismaClient.pedido.update({
            where: {
                id: pedido_id
            },
            data: {
                points: total * 1.5
            }
        })


        // 1. Pega a comanda associada ao pedido
        const pedidoComanda = await PrismaClient.pedido.findUnique({
            where: { id: pedido_id },
            select: { comanda_id: true }
        });

        if (pedidoComanda?.comanda_id) {
            // 2. Busca todos os pedidos dessa comanda
            const pedidos = await PrismaClient.pedido.findMany({
                where: { comanda_id: pedidoComanda.comanda_id }, // ou comandaId
                select: { price: true }
            });

            // 3. Soma o preço de todos os pedidos
            const totalComanda = pedidos.reduce((acc, p) => acc + p.price, 0);

            // 4. Atualiza a comanda com o total
            await PrismaClient.comanda.update({
                where: { id: pedidoComanda.comanda_id },
                data: { price: totalComanda }
            });
        }
        return item;
    }
}

export { CreateItemService };
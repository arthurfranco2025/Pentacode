import PrismaClient from "../../prisma";

interface EditItemRequest {
    id: string;
    product_id?: string;
    qtd?: number;
    removidos?: { id: string }[];
    adicionais?: { id: string }[];
    observacoes?: string;
}

class EditItemService {
    async execute({ id, product_id, qtd, removidos, adicionais, observacoes }: EditItemRequest) {

        const Item = await PrismaClient.item.findUnique({
            where: { id },
        });

        if (!Item) {
            throw new Error("O item não existe");
        }

        // Busca o pedido associado ao item
        const pedido = await PrismaClient.pedido.findUnique({
            where: { id: Item.pedido_id },
            select: { id: true, status: true, comanda_id: true },
        });

        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }

        if (pedido.status !== "pedido realizado") {
            throw new Error("O pedido já entrou em produção");
        }

        // Busca produto atualizado
        const Produto = await PrismaClient.product.findUnique({
            where: { id: product_id },
        });

        if (!Produto) {
            throw new Error("Produto não encontrado");
        }

        // Calcula novos valores
        const precoAtualizado = (qtd ?? Item.qtd) * Produto.price;
        const pontosAtualizado = (qtd ?? Item.qtd) * Produto.points;

        // Atualiza o item
        const item = await PrismaClient.item.update({
            where: { id },
            data: {
                product_id: product_id ?? Item.product_id,
                qtd: qtd ?? Item.qtd,
                price: precoAtualizado,
                points: pontosAtualizado,
                removidos:
                    Array.isArray(removidos) && removidos.length > 0 ? removidos : null,
                adicionais:
                    Array.isArray(adicionais) && adicionais.length > 0 ? adicionais : null,
                observacoes: observacoes || null,
            },
        });

        // 🔹 Recalcula total do pedido (soma de todos os itens)
        const itensPedido = await PrismaClient.item.findMany({
            where: { pedido_id: pedido.id },
        });

        const totalPedido = itensPedido.reduce((acc, i) => acc + i.price, 0);
        const totalPontos = itensPedido.reduce((acc, i) => acc + i.points, 0);

        await PrismaClient.pedido.update({
            where: { id: pedido.id },
            data: {
                price: totalPedido,
                points: totalPontos,
            },
        });

        // 🔹 Recalcula total da comanda (soma de todos os pedidos)
        const pedidosComanda = await PrismaClient.pedido.findMany({
            where: { comanda_id: pedido.comanda_id },
        });

        const totalComanda = pedidosComanda.reduce((acc, p) => acc + (p.price ?? 0), 0);
        const totalComandaPoints = pedidosComanda.reduce((acc, p) => acc + (p.points ?? 0), 0);

        await PrismaClient.comanda.update({
            where: { id: pedido.comanda_id },
            data: {
                price: totalComanda,
                points: totalComandaPoints,
            },
        });

        return item;
    }
}

export { EditItemService };
import prismaClient from "../../prisma";

interface FavoritoRequest {
    cliente_id: string;
    product_id: string;
}

class CreateFavoritoService {
    async execute({ cliente_id, product_id }: FavoritoRequest) {

        if (cliente_id) {
            const clienteExists = await prismaClient.cliente.findFirst({
                where: {
                    id: cliente_id
                }
            });
            if (!clienteExists) {
                throw new Error("Cliente não encontrado");
            }
        }

        if (product_id) {
            const productExists = await prismaClient.product.findFirst({
                where: {
                    id: product_id
                }
            });
            if (!productExists) {
                throw new Error("Produto não encontrado");
            }
        }

        if(!cliente_id || !product_id) {
            throw new Error("Cliente e Produto são obrigatórios");
        }

        const favorito = await prismaClient.favorito.create({
            data: {
                cliente_id: cliente_id,
                product_id: product_id,
            },
            select: {
                id: true,
                cliente_id: true,
                product_id: true,
            }
        });

        return favorito;
    }
}

export { CreateFavoritoService }
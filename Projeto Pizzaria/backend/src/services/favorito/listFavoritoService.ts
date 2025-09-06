import prismaClient from "../../prisma";

interface listFavoritoRequest {
    cliente_id: string
}

class ListFavoritoService {
    async execute({ cliente_id }: listFavoritoRequest) {

        if (!cliente_id) {
            throw new Error("Cliente ID é obrigatório")
        }

        if (cliente_id) {
            const clienteExists = await prismaClient.cliente.findUnique({
                where: {
                    id: cliente_id
                }
            })

            if (!clienteExists) {
                throw new Error("Cliente não existe")
            }
        }

        const favoritos = await prismaClient.favorito.findMany({
            where: {
                cliente_id: cliente_id
            }
        })

        return favoritos
    }
}

export default ListFavoritoService
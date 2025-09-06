import prismaClient from "../../prisma";

interface FavoritoRequest {
    id: string
}

class RemoveFavoritoService {
    async execute({ id }: FavoritoRequest) {

        if (id) {
            const idExiste = await prismaClient.favorito.findFirst({
                where: {
                    id: id
                }
            })

            if (!idExiste) {
                throw new Error
            }

        }

        if (!id) {
            throw new Error
        }

        const favorito = await prismaClient.favorito.delete({
            where: {
                id: id
            }
        })

        return favorito
    }
}

export default RemoveFavoritoService
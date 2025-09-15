import PrismaClient from "../../prisma";

interface DeleteItemRequest {
    id: string
}

class DeleteItemService {
    async execute({ id }: DeleteItemRequest) {

        const ItemExiste = await PrismaClient.item.findUnique({
            where: {
                id: id
            }
        })

        if (!ItemExiste) {
            throw new Error('O item não existe')
        }

        const item = await PrismaClient.item.delete({
            where: {
                id: id
            }
        })

        return item
    }
}

export { DeleteItemService }
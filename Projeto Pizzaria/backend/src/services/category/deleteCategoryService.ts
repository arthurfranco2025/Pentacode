import  PrismaClient  from "../../prisma";

interface DeleteRequest{
    category_id: string
}

class DeleteCategoryService{
    async execute({category_id}: DeleteRequest){

        if(!category_id){
            throw new Error('Insira uma categoria')
        }

        const category = await PrismaClient.category.findFirst({
            where:{
                id: category_id
            }
        })

        if(!category){
            throw new Error('Essa categoria não existe')
        }

        const deletedCategory = await PrismaClient.category.delete({
            where:{
                id: category_id
            }
        })

        return deletedCategory
    }
}

export { DeleteCategoryService }
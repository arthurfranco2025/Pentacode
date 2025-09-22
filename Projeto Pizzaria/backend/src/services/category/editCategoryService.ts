import PrismaClient from "../../prisma";

interface EditCategoryRequest{
    category_id: string
    name: string
}

class EditCategoryService{
    async execute({category_id, name} : EditCategoryRequest){

        if(!category_id){
            throw new Error('Insira a categoria')
        }

        const categoriaExiste = await PrismaClient.category.findFirst({
            where:{
                id: category_id
            }
        })

        if(!categoriaExiste){
            throw new Error('Essa categoria não existe')
        }

        if(!name){
            throw new Error('Insira o nome novo da categoria')
        }

        const editCategory = await PrismaClient.category.update({
            where:{
                id: category_id
            },
            data:{
                name: name
            }
        })

        return editCategory
    }
}

export { EditCategoryService }
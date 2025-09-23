import PrismaClient from "../../prisma";

interface ListProductRequest{
    category_id: string
    
}

class ListProductByCategory{
    async execute({category_id}: ListProductRequest){

        if(!category_id){
            throw new Error('Insira uma categoria')
        }

        const categoria = await PrismaClient.category.findUnique({
            where: {
                id: category_id
            }
        })

        if(category_id){

            if(!categoria){
                throw new Error('A categoria não existe')
            }
        }

        const lista = await PrismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return lista
    }   
}

export { ListProductByCategory }
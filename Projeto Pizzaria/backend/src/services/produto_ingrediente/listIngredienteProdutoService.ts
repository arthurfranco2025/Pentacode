import PrismaCliente from '../../prisma'

interface ListRequest{
    product_id: string
}

class ListIngredientePorProdutoService{
    async execute({product_id} : ListRequest){

        if(!product_id){
            throw new Error('Insira um produto')
        }

        const lista = await PrismaCliente.product_ingrediente.findMany({
            where: {
                product_id: product_id
            }
        })

        return lista
    }
}

export { ListIngredientePorProdutoService }
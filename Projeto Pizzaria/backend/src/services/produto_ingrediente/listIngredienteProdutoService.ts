import PrismaCliente from '../../prisma'

interface ListRequest{
    product_id: string
}

class ListIngredientePorProdutoService{
    async execute({product_id} : ListRequest){

        if(!product_id){
            throw new Error('Insira um produto')
        }

        const ingrediente_product = await PrismaCliente.product_ingrediente.findMany({
            where:{
                product_id: product_id
			},
			select: {
				ingrediente_id: true
			}
        })

		const ingredienteIds = ingrediente_product.map((ip) => ip.ingrediente_id)

		if (ingredienteIds.length === 0) {
			return []
		}

		const ingredientes = await PrismaCliente.ingrediente.findMany({
			where:{
				id: { in: ingredienteIds }
			},
			select:{
				nome: true
			}
		})

        return ingredientes
    }
}

export { ListIngredientePorProdutoService }
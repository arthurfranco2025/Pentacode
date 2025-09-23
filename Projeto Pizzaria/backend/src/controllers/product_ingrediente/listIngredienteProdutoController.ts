import { Request, Response } from 'express'
import { ListIngredientePorProdutoService } from '../../services/produto_ingrediente/listIngredienteProdutoService'

class ListIngredientePorProdutoController{
    async handle(req: Request, res: Response){

        const {product_id} = req.body
        const listIngredienteProdutoService = new ListIngredientePorProdutoService()

        const listaDeIngredientes = await listIngredienteProdutoService.execute({
            product_id
        })

        res.json(listaDeIngredientes)
    }
}

export { ListIngredientePorProdutoController }
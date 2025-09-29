import { Request, Response } from 'express'
import { ListIngredientePorProdutoService } from '../../services/produto_ingrediente/listIngredienteProdutoService'

class ListIngredientePorProdutoController{
    async handle(req: Request, res: Response){

        // tenta pegar do query, se não vier, pega do body
        const product_id = (req.query.product_id as string) || req.body.product_id
        const listIngredienteProdutoService = new ListIngredientePorProdutoService()

        const listaDeIngredientes = await listIngredienteProdutoService.execute({
            product_id
        })

        res.json(listaDeIngredientes)
    }
}

export { ListIngredientePorProdutoController }
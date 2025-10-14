import { Request, Response } from 'express'
import { SearchProductService } from '../../services/product/searchProductService'

class SearchProductController{
    async handle(req: Request, res: Response){

        const name = (req.query?.name as string) || req.body?.name
        const searchProductService = new SearchProductService()

        const listaProdutos = await searchProductService.execute({
            name
        })

        res.json(listaProdutos)
    }
}

export { SearchProductController }
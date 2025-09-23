import { Request, Response } from 'express'
import { ListProductByCategory } from '../../services/product/listProductService'

class ListProductByCategoryController {
    async handle(req: Request, res: Response) {
        try {
            // tenta pegar de query, se não vier, pega do body
            const category_id = (req.query.category_id as string) || req.body.category_id

            if (!category_id) {
                return res.status(400).json({ error: "Insira uma categoria." })
            }

            const listProductService = new ListProductByCategory()

            const produtosPorCategoria = await listProductService.execute({
                category_id
            })

            return res.json(produtosPorCategoria)

        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}

export { ListProductByCategoryController }

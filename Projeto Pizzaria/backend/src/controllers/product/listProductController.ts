import { Request, Response } from 'express/'
import { ListProductByCategory } from '../../services/product/listProductService'

class ListProductByCategoryController{
    async handle(req: Request, res: Response){
        try{

            const { category_id } = req.body

            const listProductService = new ListProductByCategory()

            const produtosPorCategoria = await listProductService.execute({
                category_id
            });

            return res.json(produtosPorCategoria)

        }catch (error: any){
            return res.status(400).json({ error: error.message });
        }
    }
}

export { ListProductByCategoryController }
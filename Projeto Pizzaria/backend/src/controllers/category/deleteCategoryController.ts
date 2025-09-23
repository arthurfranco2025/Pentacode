import { Request, Response } from 'express'
import { DeleteCategoryService } from '../../services/category/deleteCategoryService'

class DeleteCategoryController{
    async handle(req: Request, res: Response){

        const deleteCategoryService = new DeleteCategoryService()
        const {category_id} = req.body

        const deletarCategoria = await deleteCategoryService.execute({
            category_id
        })

        res.json(deletarCategoria)
    }
}

export { DeleteCategoryController }
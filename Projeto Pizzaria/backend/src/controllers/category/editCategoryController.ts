import { Request, Response } from 'express'
import { EditCategoryService } from '../../services/category/editCategoryService'

class EditCategoryController{
    async handle(req: Request, res: Response){

        const {category_id, name} = req.body

        const editCategoryService = new EditCategoryService()

        const editCategory = await editCategoryService.execute({
            category_id,
            name
        })

        res.json(editCategory)
    }
}

export { EditCategoryController }
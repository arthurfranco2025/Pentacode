import { Request, Response } from 'express';
import { EditCategoryService } from '../../services/category/editCategoryService';

class EditCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const { category_id, name } = req.body;
            const image = req.file; 

            const editCategoryService = new EditCategoryService();

            const editCategory = await editCategoryService.execute({
                category_id,
                name,
                image
            });

            return res.json(editCategory);
        } catch (error: any) {
            console.error("Erro ao editar categoria:", error);
            return res.status(400).json({ error: error.message || "Erro ao editar categoria" });
        }
    }
}

export { EditCategoryController };
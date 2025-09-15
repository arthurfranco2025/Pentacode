import { Request, Response } from 'express';
import { EditProductService } from '../../services/product/editProductService';

class EditProductController {
    async handle(req: Request, res: Response) {
        const { name, price, points, description, promocao, category_id } = req.body;
        const { id } = req.body;

        const editProductService = new EditProductService();

        try {
            const updatedProduct = await editProductService.execute({
                id,
                name,
                price,
                points,
                description,
                promocao,
                category_id
            });

            return res.json(updatedProduct);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { EditProductController }
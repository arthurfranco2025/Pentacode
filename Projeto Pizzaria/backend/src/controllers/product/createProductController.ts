import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/createProductService';

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, points, description, promocao, category_id } = req.body;

        const createProductService = new CreateProductService();

        try {
            const product = await createProductService.execute({
                name,
                price,
                points,
                description,
                promocao,
                category_id
            });

            return res.json(product);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateProductController };
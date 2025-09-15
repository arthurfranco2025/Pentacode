import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/deleteProductService";

class DeleteProductController {
    async handle(req: Request, res: Response) {
        const { product_id } = req.body;

        const deleteProductService = new DeleteProductService();

        try {
            const deleted = await deleteProductService.execute({ product_id });
            return res.json(deleted);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { DeleteProductController };
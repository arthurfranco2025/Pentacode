import { Request, Response } from "express";
import { CreateItemService } from "../../services/item/createItemService";

class CreateItemController {
    async handle(req: Request, res: Response) {
        const { product_id, pedido_id, qtd } = req.body;

        const createItemService = new CreateItemService();

        try {
            const item = await createItemService.execute({
                product_id,
                pedido_id,
                qtd,
            });

            return res.status(201).json(item);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateItemController };
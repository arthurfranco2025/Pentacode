import { Request, Response } from "express";
import { CreateItemService } from "../../services/item/createItemService";

class CreateItemController {
    async handle(req: Request, res: Response) {
        const { product_id, cliente_id, qtd, removidos, adicionais, observacoes } = req.body;

        const createItemService = new CreateItemService();

        try {
            const item = await createItemService.execute({
                product_id,
                cliente_id,
                qtd,
                removidos,
                adicionais,
                observacoes
            });

            return res.status(201).json(item);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateItemController };
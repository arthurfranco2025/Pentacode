import { Request, Response } from 'express';
import { EditItemService } from '../../services/item/editItemService';

class EditItemController {
    async handle(req: Request, res: Response) {

        const { id, product_id, qtd, price } = req.body;

        const editItemService = new EditItemService();

        try {
            const itemAtualizado = await editItemService.execute({
                id,
                product_id,
                qtd,
                price
            });

            return res.status(200).json(itemAtualizado);
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }
}

export { EditItemController }
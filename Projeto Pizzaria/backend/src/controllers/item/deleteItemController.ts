import { Request, Response } from 'express'
import { DeleteItemService } from '../../services/item/deleteItemService'

class DeleteItemController {
    async handle(req: Request, res: Response) {
        // const { id } = req.body;
        const id = (req.query.id as string) || req.body.id

        const deleteItemService = new DeleteItemService();

        try {
            const deleteItem = await deleteItemService.execute({ id });

            res.json(deleteItem);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export { DeleteItemController }
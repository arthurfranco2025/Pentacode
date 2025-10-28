import { Request, Response } from 'express'
import { EditItemStatusService } from '../../services/item/editStatusItemService'

class EditItemStatusController {
    async handle(req: Request, res: Response) {
        const { item_id, status } = req.body
        const editItemStatusService = new EditItemStatusService()
        
        const editItemStatus = await editItemStatusService.execute({ 
            item_id, 
            status 
        })

        if(!editItemStatus) {
            return res.status(400).json({ message: 'Erro ao editar status do item' })
        }

        res.json(editItemStatus)

    }
}

export { EditItemStatusController }
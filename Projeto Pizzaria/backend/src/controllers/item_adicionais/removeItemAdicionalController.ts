import { Request, Response } from 'express'
import { RemoveItemAdicional } from '../../services/item_adicionais/removeItemAdicionalService'

class RemoveItemAdicionalController{
    async handle(req: Request, res: Response){

        const {ItemAdicional_id} = req.body

        const removeItemAdicionalService = new RemoveItemAdicional()

        try{
            const deletedItemAdicional = await removeItemAdicionalService.execute({
                ItemAdicional_id
            })

            return res.json(deletedItemAdicional)
        }catch (error){
            return res.status(400).json({error: error.message})
        }
    }
}

export { RemoveItemAdicionalController }
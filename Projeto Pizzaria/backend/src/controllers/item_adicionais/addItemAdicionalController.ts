import { Request, Response } from "express";
import { CreateItemAdicionalService } from "../../services/item_adicionais/addItemAdicionalService";

class CreateItemAdicionalController{
    async handle(req: Request, res: Response){

        const createItemAdicionalService = new CreateItemAdicionalService()

        const { item_id, adicional_id, qtd} = req.body

        try{
            const itemAdicional = await createItemAdicionalService.execute({
                item_id,
                adicional_id,
                qtd
            })

            return res.json(itemAdicional)
        }catch (error){
            return res.status(400).json({error: error.message})
        }


    }
}

export { CreateItemAdicionalController }
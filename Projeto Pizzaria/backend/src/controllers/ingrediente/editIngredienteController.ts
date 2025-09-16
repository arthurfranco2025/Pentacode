import { Request, Response } from "express";
import { EditIngredienteService } from "../../services/ingrediente/editIngredienteService";

class EditIngredienteController{
    async handle(req: Request, res: Response){

        const {ingrediente_id, price} = req.body

        const editIngredienteService = new EditIngredienteService()

        try{
            const editIngrediente = await editIngredienteService.execute({
                ingrediente_id,
                price
            })
            return res.json(editIngrediente)
        }catch (error){
            return res.status(400).json({ error: error.message });
        }

    }
}

export {EditIngredienteController}
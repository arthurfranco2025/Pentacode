import { Request, Response } from "express";
import { DeleteIngredienteService } from "../../services/ingrediente/deleteIngredienteService";

class DeleteIngredienteController {
    async handle(req: Request, res: Response) {
        const { ingrediente_id } = req.body;

        const deleteIngredienteService = new DeleteIngredienteService();

        try {
            const deleted = await deleteIngredienteService.execute({ ingrediente_id });
            return res.json(deleted);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { DeleteIngredienteController };
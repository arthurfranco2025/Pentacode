import { Request, Response } from "express";
import { EditAdicionalService } from "../../services/adicionais/editAdicionalService";

class EditAdicionalController {
    async handle(req: Request, res: Response) {
        const { adicional_id, price } = req.body;

        const editAdicionalService = new EditAdicionalService();

        try {
            const editAdicional = await editAdicionalService.execute({ adicional_id, price });
            return res.json(editAdicional);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { EditAdicionalController };
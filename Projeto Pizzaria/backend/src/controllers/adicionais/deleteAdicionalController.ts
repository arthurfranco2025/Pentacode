import { Request, Response } from "express";
import { DeleteAdicionalService } from "../../services/adicionais/deleteAdicionalService";

class DeleteAdicionalController {
    async handle(req: Request, res: Response) {
        const { adicional_id } = req.body;

        const deleteAdicionalService = new DeleteAdicionalService();

        try {
            const deleted = await deleteAdicionalService.execute({ adicional_id });
            return res.json(deleted);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { DeleteAdicionalController };
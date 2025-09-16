import { Request, Response } from "express";
import { DeleteProductIngredienteService } from "../../services/produto_ingrediente/deleteProduto_ingredienteService";

class DeleteProductIngredienteController {
    async handle(req: Request, res: Response) {
        const { produtoIngrediente_id } = req.body;

        const deleteProductIngredienteService = new DeleteProductIngredienteService();

        try {
            const deleted = await deleteProductIngredienteService.execute({ produtoIngrediente_id });
            return res.json(deleted);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { DeleteProductIngredienteController };
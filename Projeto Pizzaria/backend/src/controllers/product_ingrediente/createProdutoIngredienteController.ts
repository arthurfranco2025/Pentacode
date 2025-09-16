import { Request, Response } from 'express';
import { CreateProductIngredienteService } from '../../services/produto_ingrediente/createProdutoIngredienteService';

class CreateProductIngredienteController {
    async handle(req: Request, res: Response) {
        const { product_id, ingrediente_id } = req.body;

        const createProductIngredienteService = new CreateProductIngredienteService();

        try {
            const product_ingrediente = await createProductIngredienteService.execute({
                product_id,
                ingrediente_id
            });

            return res.json(product_ingrediente);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateProductIngredienteController };
import { Request, Response } from 'express';
import { CreateIngredienteService } from '../../services/ingrediente/createIngredienteService';

class CreateIngredienteController {
    async handle(req: Request, res: Response) {
        const { name, price } = req.body;

        const createIngredienteService = new CreateIngredienteService();

        try {
            const ingrediente = await createIngredienteService.execute({
                name,
                price
            });

            return res.json(ingrediente);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateIngredienteController };
import { Request, Response } from 'express';
import { CreateAdicionalService } from '../../services/adicionais/createAdicionaisService';

class CreateAdicionalController {
    async handle(req: Request, res: Response) {
        const { name, price, points } = req.body;

        const createAdicionalService = new CreateAdicionalService();

        try {
            const adicional = await createAdicionalService.execute({
                name,
                price,
                points
            });

            return res.json(adicional);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateAdicionalController };
import { Request, Response } from "express";
import { CreateFavoritoService } from "../../services/favorito/createFavoritoService";

class CreateFavoritoController {
    async handle(req: Request, res: Response) {
        console.log("Body recebido:", req.body);
        const { cliente_id, product_id } = req.body;

        const createFavoritoService = new CreateFavoritoService();

        try {
            const favorito = await createFavoritoService.execute({
                cliente_id,
                product_id
            });
            res.json(favorito);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export { CreateFavoritoController };
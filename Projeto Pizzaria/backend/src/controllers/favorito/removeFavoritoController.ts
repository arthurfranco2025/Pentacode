import { Request, Response } from "express";
import RemoveFavoritoService from "../../services/favorito/removeFavoritoService";

class RemoveFavoritoController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;

        const removeFavoritoService = new RemoveFavoritoService();

         try {
            const removefavorito = await removeFavoritoService.execute({
                id
            });
            response.json(removefavorito);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
}

export { RemoveFavoritoController };
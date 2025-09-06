import { Request, Response } from "express";
import  ListFavoritoService  from "../../services/favorito/listFavoritoService";

class ListFavoritoController {
    async handle(req: Request, res: Response) {
        const { cliente_id } = req.body;

        const listFavoritoService = new ListFavoritoService();

        try {
            const favoritos = await listFavoritoService.execute({
                cliente_id
            });
            res.json(favoritos);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export { ListFavoritoController };
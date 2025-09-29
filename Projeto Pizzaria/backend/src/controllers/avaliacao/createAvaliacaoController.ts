import { Request, Response } from "express";
import { CreateAvalicaoService } from "../../services/avaliacao/createAvaliacaoService";

class CreateAvalicaoController {
    async handle(req: Request, res: Response) {
        const { comanda_id, nota, descricao } = req.body;

        const createAvalicaoService = new CreateAvalicaoService();

        try {
            const avaliacao = await createAvalicaoService.execute({
                comanda_id,
                nota,
                descricao
            });

            return res.json(avaliacao);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateAvalicaoController };
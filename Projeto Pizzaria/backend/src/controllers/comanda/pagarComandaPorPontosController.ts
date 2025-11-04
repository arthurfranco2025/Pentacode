import { Request, Response } from "express";
import { PagarComandaService } from "../../services/comanda/pagarComandaService";

class PagarComandaPorPontosController {
    async handle(req: Request, res: Response) {
        try {
            const { comanda_id } = req.body;

            if (!comanda_id) {
                return res.status(400).json({ error: "O id da comanda é obrigatório" });
            }

            const pagarComandaService = new PagarComandaService();

            const result = await pagarComandaService.execute({ comanda_id, payWithPoints: true });

            return res.status(200).json(result);
        } catch (err: any) {
            return res.status(400).json({ error: err.message || "Erro ao pagar a comanda" });
        }
    }
}

export { PagarComandaPorPontosController };
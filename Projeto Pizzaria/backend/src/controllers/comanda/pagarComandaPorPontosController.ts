import { Request, Response } from "express";
import { PagarComandaPorPontosService } from "../../services/comanda/pagarComandaPorPontosService";

class PagarComandaPorPontosController {
    async handle(req: Request, res: Response) {
        try {
            const { comanda_id } = req.body;

            if (!comanda_id) {
                return res.status(400).json({ error: "O id da comanda é obrigatório" });
            }

            const pagarComandaService = new PagarComandaPorPontosService();

            await pagarComandaService.execute({ comanda_id });

            return res.status(200).json({ message: "Comanda paga com sucesso usando pontos" });
        } catch (err: any) {
            return res.status(400).json({ error: err.message || "Erro ao pagar a comanda" });
        }
    }
}

export { PagarComandaPorPontosController };
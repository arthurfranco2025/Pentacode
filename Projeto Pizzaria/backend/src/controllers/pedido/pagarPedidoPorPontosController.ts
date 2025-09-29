import { Request, Response } from "express";
import { PagarPedidoService } from "../../services/pedido/pagarPedidoPorPontosService";

class PagarPedidoPorPontosController {
    async handle(req: Request, res: Response) {
        try {
            const { pedido_id } = req.body;

            if (!pedido_id) {
                return res.status(400).json({ error: "O id do pedido é obrigatório" });
            }

            const pagarPedidoService = new PagarPedidoService();

            const pedidoPago = await pagarPedidoService.execute({ pedido_id });

            return res.status(200).json({
                message: "Pedido pago com sucesso usando pontos",
                pedido: pedidoPago
            });
        } catch (err: any) {
            return res.status(400).json({ error: err.message || "Erro ao pagar pedido" });
        }
    }
}

export { PagarPedidoPorPontosController };
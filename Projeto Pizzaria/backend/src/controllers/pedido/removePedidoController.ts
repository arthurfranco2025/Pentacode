import { Request, Response } from "express";
import { RemovePedidoService } from "../../services/pedido/removePedidoService";

class RemovePedidoController {
  async handle(req: Request, res: Response) {
    try {
      const { pedido_id } = req.body;

      const removePedidoService = new RemovePedidoService();

      const pedidoRemovido = await removePedidoService.execute({
        pedido_id,
      });

      return res.json(pedidoRemovido);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { RemovePedidoController };
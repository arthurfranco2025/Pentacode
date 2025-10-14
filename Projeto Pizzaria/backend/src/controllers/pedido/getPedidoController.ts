import { Request, Response } from "express";
import { GetPedidoStatusService } from "../../services/pedido/getStatusPedidoService";

class GetPedidoStatusController {
  async handle(req: Request, res: Response) {
    const { pedido_id } = req.params;
    const service = new GetPedidoStatusService();

    const pedido = await service.execute({ pedido_id });
    res.json(pedido);
  }
}

export { GetPedidoStatusController };

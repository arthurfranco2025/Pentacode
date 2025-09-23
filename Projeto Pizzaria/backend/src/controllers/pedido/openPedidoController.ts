import { Request, Response } from "express";
import { OpenPedidoService } from "../../services/pedido/openPedidoService";

class OpenPedidoController{
    async handle(req: Request, res: Response){
        const {cliente_id} = req.body;  

        const openPedidoService = new OpenPedidoService();

        const pedido = await openPedidoService.execute({
            cliente_id
        });

        res.json(pedido)
    }
}

export { OpenPedidoController }
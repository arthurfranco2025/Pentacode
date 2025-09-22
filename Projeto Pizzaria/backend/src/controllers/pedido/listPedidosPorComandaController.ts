import { Request, Response } from "express";
import { ListPedidoPorComanda } from "../../services/pedido/listPedidosPorComandaService";

class ListPedidoPorComandaController {
    async handle(req: Request, res: Response) {

        const { comanda_id } = req.body
        const listPedidoService = new ListPedidoPorComanda()

        try {
            const ListaDePedido = await listPedidoService.execute({ comanda_id })
            return res.json(ListaDePedido)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}

export { ListPedidoPorComandaController }
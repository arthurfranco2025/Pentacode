import { Request, Response } from 'express'
import { PagarPedidoService } from '../../services/pedido/pagarPedidoSeparadoService'

class PagarPedidoController{
    async handle(req: Request, res: Response){

        const { pedido_id } = req.body
        const pagarPedidoService = new PagarPedidoService()

        const pagarPedido = await pagarPedidoService.execute({
            pedido_id
        });

        res.json(pagarPedido)

    }
}

export { PagarPedidoController }
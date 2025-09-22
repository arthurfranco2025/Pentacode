import { Request, Response } from  'express'
import { EditarPedidoPagoService } from '../../services/pedido/editPedidoPagoService'

class EditarPedidoPagoController{
    async handle(req: Request, res: Response){

        const { pedido_id } = req.body
        const editarPedidoPagoService =  new EditarPedidoPagoService()

        const editarPedido = editarPedidoPagoService.execute({
            pedido_id
        })

        res.json(editarPedido)
    }
}

export { EditarPedidoPagoController }
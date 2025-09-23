import { Request, Response } from 'express'
import { EditPedidoStatusService } from '../../services/pedido/editPedidoStatusService'

class EditPedidoStatusController{
    async handle(req: Request, res: Response){

        const {pedido_id, status} = req.body
        const editPedidoService = new EditPedidoStatusService()

        const editarStatus = await editPedidoService.execute({
            pedido_id,
            status
        })

        res.json(editarStatus)
    }
}

export { EditPedidoStatusController }
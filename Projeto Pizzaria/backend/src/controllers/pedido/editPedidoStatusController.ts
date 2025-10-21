import { Request, Response } from 'express'
import { EditPedidoStatusService } from '../../services/pedido/editPedidoStatusService'

class EditPedidoStatusController {
    async handle(req: Request, res: Response) {

        const pedido_id = (req.query?.pedido_id as string) || req.body?.pedido_id
        const status = (req.query?.pedido_id as string) || req.body?.status

        const editPedidoService = new EditPedidoStatusService()

        const editarStatus = await editPedidoService.execute({
            pedido_id,
            status
        })

        res.json(editarStatus)
    }
}

export { EditPedidoStatusController }
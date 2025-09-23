import { Request, Response } from 'express'
import { ListPedidoGarcomService } from '../../services/pedido/listPedidoGarcomService'

class ListPedidoGarcomController{
    async handle(req: Request, res: Response){

        const listPedidoGarcomService = new ListPedidoGarcomService()

        const listaPedidoProGarcom = await listPedidoGarcomService.execute()

        res.json(listaPedidoProGarcom)
    }
}

export { ListPedidoGarcomController }
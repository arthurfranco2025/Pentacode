import { Request, Response } from 'express'
import { ListItensPorPedidoService } from '../../services/item/listItensPorPedidoService'

class ListItensPorPedidoController{
    async handle(req: Request, res: Response){

        const {pedido_id} = req.body

        const listItensService = new ListItensPorPedidoService()

        try{
            const listaDeItens = await listItensService.execute({pedido_id})
            return res.json(listaDeItens)
        }catch (error){
            return res.status(400).json({ message: error.message });
        }
    }
}

export { ListItensPorPedidoController }
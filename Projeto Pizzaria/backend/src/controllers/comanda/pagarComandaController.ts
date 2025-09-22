import {Request, Response} from 'express'
import { PagarComandaService } from '../../services/comanda/pagarComandaService'

class PagarComandaController{
    async handle(req: Request, res: Response){

        const { comanda_id } = req.body
        const pagarComandaService = new PagarComandaService()

        const pagarComanda = await pagarComandaService.execute({
            comanda_id
        });

        res.json(pagarComanda)
    }
}

export { PagarComandaController }
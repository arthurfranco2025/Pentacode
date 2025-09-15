import { Request, Response } from "express"
import { OpenComandaService } from "../../services/comanda/openComandaService"

class OpenComandaController{
    async handle(req: Request, res: Response){

        const { cliente_id } = req.body;

        const openComandaService = new OpenComandaService()

        const comanda = openComandaService.execute({
            cliente_id
        })
        res.json(cliente_id)
    }
}

export { OpenComandaController }
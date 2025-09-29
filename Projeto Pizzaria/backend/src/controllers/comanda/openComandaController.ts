import {Request, Response} from  'express'
import { OpenComandaService } from '../../services/comanda/openComandaService';

class OpenComandaController{
    async handle(req: Request, res: Response){
        const {cliente_id} = req.body;
        const {mesa_id} = req.params

        const openComandaService = new OpenComandaService();

        const comanda = await openComandaService.execute({
            cliente_id,
            mesa_id
        });

        res.json(comanda)
    }
}

export { OpenComandaController }
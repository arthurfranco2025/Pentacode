import {Request, Response} from  'express'
import { CloseComandaService } from '../../services/comanda/closeComandaService';

class CloseComandaController{
    async handle(req: Request, res: Response){
        const {cliente_id} = req.body;

        const closeComandaService = new CloseComandaService();

        const comanda = await closeComandaService.execute({
            cliente_id
        });

        res.json(comanda)
    }
}

export { CloseComandaController }
import {Request, Response} from  'express'
import { CloseComandaService } from '../../services/comanda/closeComandaService';

class CloseComandaController{
    async handle(req: Request, res: Response){
        const {comanda_id} = req.body;

        const closeComandaService = new CloseComandaService();

        const comanda = await closeComandaService.execute({
            comanda_id
        });

        res.json(comanda)
    }
}

export { CloseComandaController }
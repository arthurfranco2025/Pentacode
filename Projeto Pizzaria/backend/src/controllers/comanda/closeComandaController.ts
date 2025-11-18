import {Request, Response} from  'express'
import { CloseComandaService } from '../../services/comanda/closeComandaService';

class CloseComandaController{
    async handle(req: Request, res: Response){
        const {comanda_id, tipoPagamento} = req.body;

        const closeComandaService = new CloseComandaService();

        const comanda = await closeComandaService.execute({
            comanda_id,
            tipoPagamento
        });

        res.json(comanda)
    }
}

export { CloseComandaController }
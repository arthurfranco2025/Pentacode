import { Request, Response } from 'express'
import { ListComandaService } from '../../services/comanda/listComandasService'

class ListComandaController {
    async handle(req: Request, res: Response) {
        const listComandaservice = new ListComandaService();
        const comandas = await listComandaservice.execute();
        return res.json(comandas);
    }
}

export { ListComandaController }
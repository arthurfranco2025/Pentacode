import { Request, Response } from "express";

import { ListComandaPorClienteService } from "../../services/comanda/ListComandaPorClienteServices";

class ListComandaPorClienteController{
    async handle(req: Request, res: Response){
        const {id} = req.body;

        const listComandaPorClienteService = new ListComandaPorClienteService();

        const list = await listComandaPorClienteService.execute({ cliente_id: id })

        res.json(list)
    }
}

export { ListComandaPorClienteController }
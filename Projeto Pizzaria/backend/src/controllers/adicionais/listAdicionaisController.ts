import { Request, Response } from "express";
import { ListAdicionaisService } from "../../services/adicionais/listAdicionaisServices";

class ListAdicionaisController{
    async handle(req: Request, res: Response){

        const listAdicionaisServices = new ListAdicionaisService()

        const lista = await listAdicionaisServices.execute()

        res.json(lista)
    }
}

export { ListAdicionaisController }
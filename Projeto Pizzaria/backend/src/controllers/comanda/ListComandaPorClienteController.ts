import { Request, Response } from "express";
import { ListComandaPorClienteService } from "../../services/comanda/ListComandaPorClienteServices";

class ListComandaPorClienteController {
  async handle(req: Request, res: Response) {
    const { cliente_id } = req.query; 

    if (!cliente_id || typeof cliente_id !== "string") {
      return res.status(400).json({ error: "ID do cliente é obrigatório" });
    }

    const listComandaPorClienteService = new ListComandaPorClienteService();

    try {
      const list = await listComandaPorClienteService.execute({
        cliente_id,
      });

      return res.json(list);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { ListComandaPorClienteController };

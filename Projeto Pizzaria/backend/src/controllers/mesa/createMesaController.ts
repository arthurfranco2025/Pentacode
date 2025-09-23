import { Request, Response } from "express";
import { CreateMesaService } from "../../services/mesa/createMesaService";

class CreateMesaController {
  async handle(req: Request, res: Response) {
    try {
      const { numero } = req.body;

      const createMesaService = new CreateMesaService();

      const mesa = await createMesaService.execute({ numero });

      return res.json(mesa);
    } catch (error: any) {
      console.error("Erro ao criar mesa:", error);
      return res.status(400).json({
        error: error.message || "Erro ao criar mesa"
      });
    }
  }
}

export { CreateMesaController };
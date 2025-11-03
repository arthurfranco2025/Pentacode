import { Request, Response } from "express";
import { RequestPasswordResetService } from "../../services/cliente/RequestPasswordResetService";

class RequestPasswordResetController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;
    const service = new RequestPasswordResetService();

    try {
      const result = await service.execute({ email });
      return res.status(200).json(result);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}

export { RequestPasswordResetController };

import { Request, Response } from "express";
import { CreateItemService } from "../../services/item/createItemService";

class CreateItemController {
  async handle(req: Request, res: Response) {
    const { product_id, product2_id, pedido_id, qtd, removidos, adicionais, observacoes, payWithPoints, pointsUsed } = req.body;

    const createItemService = new CreateItemService();

    try {
      const item = await createItemService.execute({
        product_id,
        product2_id,
        pedido_id,
        qtd,
        removidos,
        adicionais,
        observacoes,
        payWithPoints: !!payWithPoints,
        pointsUsed: Number(pointsUsed || 0),
      });

      return res.status(201).json(item);
    } catch (error: any) {
      return res.status(400).json({ error: error.message || "Erro ao criar item" });
    }
  }
}

export { CreateItemController };

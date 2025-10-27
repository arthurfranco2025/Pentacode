import { Request, Response } from "express";
import { EditClienteService } from "../../services/cliente/EditClienteService";

class EditClienteController {
  async handle(req: Request, res: Response) {
    try {
      const {
        novoName,
        novoEmail,
        confirmEmail,
        oldPassword,
        novoPassword,
        confirmPassword,
        cpf,
        nascimento,
        image_url
      } = req.body;

      let banner;
      if (req.file) banner = req.file;
      else if (req.body.banner) banner = req.body.banner;

      const removeImage =
        req.body.removeImage === "true" || req.body.removeImage === true;

      const userId = req.user_id as string;

      const editClienteService = new EditClienteService();

      const clienteAtualizado = await editClienteService.execute({
        banner,
        removeImage,
        userId,
        novoName,
        novoEmail,
        confirmEmail,
        oldPassword,
        novoPassword,
        confirmPassword,
        cpf,
        nascimento,
        image_url
      });

      return res.status(200).json(clienteAtualizado);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { EditClienteController };
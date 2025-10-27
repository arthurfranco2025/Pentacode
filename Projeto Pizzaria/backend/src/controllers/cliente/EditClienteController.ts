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
      } = req.body;

      // Banner enviado via form-data ou URL
      let banner;
      if (req.file) {
        banner = req.file; // Multer
      } else if (req.body.banner) {
        banner = req.body.banner; // URL
      }

      // flag para remover a imagem (aceita 'true' ou boolean true)
      const removeImage = req.body.removeImage === 'true' || req.body.removeImage === true;

      const userId = req.user_id as string; // setado pelo middleware de auth

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
      });

      return res.status(200).json(clienteAtualizado);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { EditClienteController };
import { Request, Response } from 'express';
import prismaClient from '../../prisma';
import bcrypt from 'bcryptjs';

export class ResetPasswordClienteController {
  async handle(req: Request, res: Response) {
  const userId = req.user_id; // user_id deve ser setado pelo middleware de autenticação
    const { password } = req.body;

    if (!password || password.length < 6) {
      return res.status(400).json({ message: 'A senha deve ter pelo menos 6 caracteres.' });
    }

    try {
      const hash = await bcrypt.hash(password, 10);
      await prismaClient.cliente.update({
        where: { id: userId },
        data: { password: hash },
      });
      return res.json({ message: 'Senha alterada com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao alterar senha.' });
    }
  }
}

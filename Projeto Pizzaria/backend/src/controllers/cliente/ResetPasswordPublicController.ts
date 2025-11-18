import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import prismaClient from '../../prisma';
import bcrypt from 'bcryptjs';

interface Payload {
  sub: string;
}

export class ResetPasswordPublicController {
  async handle(req: Request, res: Response) {
    const { token, password } = req.body;

    if (!token) return res.status(400).json({ message: 'Token é obrigatório.' });
    if (!password || password.length < 6) return res.status(400).json({ message: 'A senha deve ter pelo menos 6 caracteres.' });

    try {
      const { sub } = verify(token, 'segredo_leticia') as Payload;

      const hash = await bcrypt.hash(password, 10);

      await prismaClient.cliente.update({
        where: { id: sub },
        data: { password: hash },
      });

      return res.json({ message: 'Senha alterada com sucesso!' });
    } catch (err: any) {
      console.error('Erro ao resetar senha pública:', err);
      return res.status(400).json({ message: 'Token inválido ou expirado.' });
    }
  }
}

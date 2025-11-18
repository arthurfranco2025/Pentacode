import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
import { sign } from 'jsonwebtoken';

interface RequestPasswordResetRequest {
    email: string;
}

class RequestPasswordResetService {
    async execute({ email }: RequestPasswordResetRequest) {
        if (!email) throw new Error("O email é obrigatório");

        const cliente = await prismaClient.cliente.findFirst({ where: { email } });

        if (!cliente) throw new Error("Conta não encontrada para esse email");

        // Configurar transportador de email
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Configurações de email não encontradas. Configure EMAIL_USER e EMAIL_PASS no .env");
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        // Gerar token JWT com validade curta e construir link de redefinição
        const token = sign({}, 'segredo_leticia', { subject: cliente.id, expiresIn: '1h' });

        // Construir link de redefinição (pode ser uma URL pública do ngrok)
        const configured = process.env.PASSWORD_RESET_URL || 'https://wellborn-humoresquely-norman.ngrok-free.dev/edit-password';
        const baseLink = configured.endsWith('/edit-password')
            ? configured
            : `${configured.replace(/\/$/, '')}/edit-password`;
        const resetLink = `${baseLink}?token=${encodeURIComponent(token)}`;

        await transporter.sendMail({
            from: '"PentaPizza" <pizzariapenta@gmail.com>',
            to: email,
            subject: "Solicitação de redefinição de senha - PentaPizza",
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #FF3F4B;">PentaPizza</h2>
                    <p>Olá ${cliente.name || ''},</p>
                    <p>Recebemos sua solicitação para redefinir a senha.</p>
                    <p>Para criar uma nova senha, clique no link abaixo:</p>
                    <p>
                        <a href="${resetLink}" style="color: #FF3F4B; font-weight: bold;">Redefinir senha</a>
                    </p>
                    <p>Ou acesse: ${resetLink}</p>
                    <p>Se você não solicitou essa redefinição, ignore este email.</p>
                    <br>
                    <p>Atenciosamente,<br>Equipe PentaPizza</p>
                </div>
            `,
        });

        return { message: "Email de redefinição enviado com sucesso" };
    }
}

export { RequestPasswordResetService };

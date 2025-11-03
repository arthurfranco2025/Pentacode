import prismaClient from "../../prisma";
import { compare, hash } from "bcryptjs";
import nodemailer from "nodemailer";

interface ForgotPasswordClienteRequest {
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
}

class ForgotPasswordClienteService {
    async execute({ email, cpf, password, confirmPassword }: ForgotPasswordClienteRequest) {

        if (!email) throw new Error("O email é obrigatório");
        if (!cpf) throw new Error("O CPF é obrigatório");
        if (!password) throw new Error("Digite a nova senha");
        if (!confirmPassword) throw new Error("Digite a confirmação de senha");
        if (password !== confirmPassword) throw new Error("As senhas não são iguais");

        const clienteExiste = await prismaClient.cliente.findFirst({
            where: {
                email,
                cpf
            }
        });

        if (!clienteExiste) {
            throw new Error("Essa conta não existe, faça seu cadastro!");
        }

        const senhaIgual = await compare(password, clienteExiste.password);
        if (senhaIgual) {
            throw new Error("A nova senha não pode ser igual a senha antiga");
        }

        const senhaSegura = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#./+¨()]{8,}$/;
        if (!senhaSegura.test(password)) {
            throw new Error("A nova senha deve ter pelo menos 8 caracteres, incluindo letras e números.");
        }

        const passwordHash = await hash(password, 8);

        const clienteAtualizado = await prismaClient.cliente.update({
            where: { id: clienteExiste.id },
            data: { password: passwordHash },
            select: { id: true, name: true, email: true }
        });

        // Opcional: enviar email de confirmação
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true para 465, false para 587
            auth: {
                user: "seu-email@gmail.com",
                pass: "sua-senha-de-app", // senha de app gerada pelo Google
            },
        });

        await transporter.sendMail({
            from: '"PentaPizza" <no-reply@pizzaria.com>',
            to: clienteAtualizado.email,
            subject: "Senha alterada com sucesso",
            html: `<p>Sua senha foi redefinida com sucesso!</p>`
        });

        return clienteAtualizado;
    }
}

export { ForgotPasswordClienteService };
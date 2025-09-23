import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email?: string;
    cpf?: string;
    password?: string;
    guest?: boolean; // flag para login como convidado
}

class AuthClienteService {
    async execute({ email, cpf, password, guest }: AuthRequest) {

        let cliente;

        if (guest) {
            // Login como convidado: cria cliente com dados fake
            const randomId = Math.floor(Math.random() * 100000);
            const nome = `Convidado_${randomId}`;
            const emailFake = `guest_${randomId}@pizzaria.com`;
            const cpfFake = `00000000000${randomId}`;
            const passwordFake = "guest";

            cliente = await prismaClient.cliente.create({
                data: {
                    name: nome,
                    email: emailFake,
                    cpf: cpfFake,
                    password: passwordFake
                }
            });

        } else {
            // Login normal
            if (!email && !cpf) {
                throw new Error("Insira um email ou CPF válido");
            }
            if (!password) {
                throw new Error("Senha é obrigatória");
            }

            cliente = await prismaClient.cliente.findFirst({
                where: {
                    email: email,
                    cpf: cpf
                }
            });

            if (!cliente) {
                throw new Error("Usuário não encontrado");
            }

            const passwordMatch = await compare(password, cliente.password);

            if (!passwordMatch) {
                throw new Error("Usuário ou senha incorretos");
            }
        }

        if (!guest && (!email || !cpf || !password)) {
            throw new Error("Insira os dados de login");
        }


        // Gera token JWT
        const token = sign(
            {
                id: cliente.id,
                name: cliente.name,
                isGuest: guest || false
            },
            'segredo_leticia',
            {
                subject: cliente.id,
                expiresIn: '1d'
            }
        );

        return {
            id: cliente.id,
            name: cliente.name,
            email: cliente.email,
            isGuest: guest || false,
            token
        };
    }
}

export { AuthClienteService };

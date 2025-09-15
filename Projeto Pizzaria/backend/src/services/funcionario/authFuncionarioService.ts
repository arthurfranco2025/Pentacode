import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string;
    password: string;
}

class AuthFuncionarioService {
    async execute({ email, password }: AuthRequest) {

        const funcionario = await prismaClient.funcionario.findFirst({
            where: {
                email: email
            }
        })

        if (!funcionario) {
            throw new Error("Usuário não encontrado")
        }

        if (!email) {
            throw new Error("Insira um email válido");
        }
        if (!password) {
            throw new Error("Senha é obrigatório")
        }

        const passwordMatch = await compare(password, funcionario.password)

        if (!passwordMatch) {
            throw new Error('Usuário ou senha incorretos')
        }

        const token = sign(
            {
                email: funcionario.email,
                password: funcionario.password
            },
            'segredo_leticia',
            {
                subject: funcionario.id,
                expiresIn: '30d'

            }
        )

        return {
            id: funcionario.id,
            name: funcionario.name,
            email: funcionario.email,
            token: token
        }
    }
}

export { AuthFuncionarioService }
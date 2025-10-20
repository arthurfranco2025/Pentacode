import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { cpf as cpfValidator } from 'cpf-cnpj-validator'

interface ClienteRequest {
    name: string,
    email: string,
    password: string,
    cpf: string,
    data_nasc: Date
}

class CreateClienteService {
    async execute({ name, email, password, cpf, data_nasc }: ClienteRequest) {

        // Validações básicas
        if (!name) throw new Error("Insira o seu nome");
        if (!email) throw new Error("Email incorreto");
        if (!cpf) throw new Error('CPF é obrigatório');
        if (!cpfValidator.isValid(cpf)) throw new Error("CPF inválido");
        if (!password) throw new Error('Senha é obrigatória');
        if (!data_nasc) throw new Error('Data de Nascimento é obrigatória');

        if (!this.validarNome(name)) {
            throw new Error("O seu nome não pode conter caracteres especiais");
        }

        if (!this.validarEmail(email)) {
            throw new Error("Somente letras (a - z), números (0 - 9) e pontos (.) são permitidos.");
        }

        const senhaSegura = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#./+¨()]{8,}$/;
        if (!senhaSegura.test(password)) {
            throw new Error("A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra e um número.");
        }

        // Verifica se já existe cliente com email ou cpf
        const clienteAlreadyExists = await prismaClient.cliente.findFirst({ where: { email } });
        const clienteAlreadyExistsCPF = await prismaClient.cliente.findFirst({ where: { cpf } });

        if (clienteAlreadyExists || clienteAlreadyExistsCPF) {
            throw new Error("Já existe um cliente cadastrado com esse email ou CPF");
        }

        // Hash da senha
        const passwordHash = await hash(password, 8);

        // Cria cliente no banco
        const cliente = await prismaClient.cliente.create({
            data: {
                name,
                email,
                password: passwordHash,
                cpf,
                data_nasc: new Date(data_nasc),
            },
            select: {
                id: true,
                name: true,
                email: true,
                data_nasc: true,
            }
        });

        return cliente;
    }

    // Validação de nome
    private validarNome(nome: string): boolean {
        const regex = /^[A-Za-zÀ-ÿ\s]+$/;
        return regex.test(nome);
    }

    // Validação de email
    private validarEmail(email: string): boolean {
        const regex = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+$/i;
        return regex.test(email);
    }
}

export { CreateClienteService }

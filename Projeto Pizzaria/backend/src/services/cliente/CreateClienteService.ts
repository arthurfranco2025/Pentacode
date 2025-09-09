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

        if (!email) {
            throw new Error("Email incorreto")
        }

        if (!cpf) {
            throw new Error('CPF é obrigatório')
        }

        // NOVA VALIDAÇÃO RIGOROSA DO CPF
        const cpfNumeros = cpf.replace(/\D/g, ""); // remove pontos e traços
        if (!/^\d{11}$/.test(cpfNumeros)) {
            throw new Error("CPF deve conter exatamente 11 dígitos numéricos");
        }
        if (!cpfValidator.isValid(cpfNumeros)) {
            throw new Error("CPF inválido");
        }
        const cpfFormatado = cpfValidator.format(cpfNumeros); // formata para padrão 000.000.000-00

        if (!password) {
            throw new Error('Senha é obrigatória')
        }

        if (!data_nasc) {
            throw new Error('Data de Nascimento é obrigatória')
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("Email inválido");
        }

        const senhaSegura = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#./+¨()]{8,}$/;
        if (!senhaSegura.test(password)) {
            throw new Error("A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra e um número.");
        }

        const clienteAlreadyExists = await prismaClient.cliente.findFirst({
            where: {
                email: email
            }
        })
        const clienteAlreadyExistsCPF = await prismaClient.cliente.findFirst({
            where: {
                cpf: cpfFormatado
            }
        })
        if (clienteAlreadyExists || clienteAlreadyExistsCPF) {
            throw new Error("O Cliente já existe, mude seu email ou cpf")
        }

        const passwordHash = await hash(password, 8)

        const dataDefault = data_nasc + 'T00:00:00.000Z'

        const cliente = await prismaClient.cliente.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                cpf: cpfFormatado,
                data_nasc: dataDefault,
            },
            select: {
                id: true,
                name: true,
                email: true,
                data_nasc: true,
            }
        })

        return cliente
    }
}

export { CreateClienteService }

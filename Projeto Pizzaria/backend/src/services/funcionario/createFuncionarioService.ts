import  PrismaClient  from "../../prisma";
import { hash } from "bcryptjs";

interface CreateFuncionarioRequest {
  name: string;
  funcao: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class CreateFuncionarioService {
  async execute({ name, funcao, email, password, confirmPassword }: CreateFuncionarioRequest) {

    console.log(name, funcao, email, password, confirmPassword);

    if (!name || !funcao || !email || !password || !confirmPassword) {
      throw new Error("Preencha todos os campos");
    }

    const funcaoCaixaBaixa = funcao.toLowerCase();
    if (funcaoCaixaBaixa !== "caixa" && funcaoCaixaBaixa !== "gerente" && funcaoCaixaBaixa !== "cozinheiro" && funcaoCaixaBaixa !== "garcom") {
      throw new Error("Função inválida. As funções permitidas são: CAIXA, GERENTE, COZINHEIRO, GARCOM");
    }

    if (password !== confirmPassword) {
      throw new Error("As senhas não correspondem");
    }

    const passwordHash = await hash(password, 8);

    const funcionario = await PrismaClient.funcionario.create({
      data: {
        name : name,
        funcao: funcaoCaixaBaixa,
        email: email,
        password: passwordHash,
      },
    });

    return funcionario;
  }
}

export { CreateFuncionarioService };

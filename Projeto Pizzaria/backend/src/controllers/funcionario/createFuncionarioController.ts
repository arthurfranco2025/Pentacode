import { Request, Response } from "express";
import { CreateFuncionarioService } from '../../services/funcionario/createFuncionarioService'

class CreateFuncionarioController {
    async handle(req: Request, res: Response) {
        const { name, funcao, email, password, confirmPassword } = req.body;

        const createFuncionarioService = new CreateFuncionarioService();

        try {
            const funcionario = await createFuncionarioService.execute({
                name,
                funcao,
                email,
                password,
                confirmPassword,
            });

            return res.status(201).json(funcionario);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { CreateFuncionarioController };
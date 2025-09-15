import { Request, Response } from "express";
import { AuthFuncionarioService } from "../../services/funcionario/authFuncionarioService";

class AuthFuncionarioController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body

        const authFuncionarioService = new AuthFuncionarioService()

        const auth =  await authFuncionarioService.execute({
            email,
            password
        })

        res.json(auth)
    }
}

export { AuthFuncionarioController };
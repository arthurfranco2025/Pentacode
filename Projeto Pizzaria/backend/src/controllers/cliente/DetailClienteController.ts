import { Request, Response } from 'express';
import prismaClient from '../../prisma';

class DetailClienteController {
    async handle(req: Request, res: Response) {
        // O ID do cliente está disponível em req.user_id após passar pelo middleware isAuthenticated
        const user_id = req.user_id;

        try {
            const cliente = await prismaClient.cliente.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    cpf: true,
                    data_nasc: true,
                    image_url: true,
                    created_at: true,
                    updated_at: true
                }
            });

            if (cliente) {
                // Formata o CPF (XXX.XXX.XXX-XX)
                if (cliente.cpf) {
                    cliente.cpf = cliente.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
                }

                // Formata a data (YYYY-MM-DD)
                if (cliente.data_nasc) {
                    const date = new Date(cliente.data_nasc);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    cliente.data_nasc = new Date(`${year}-${month}-${day}`);
                }
            }

            if (!cliente) {
                return res.status(404).json({ error: "Cliente não encontrado" });
            }

            return res.json(cliente);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao buscar dados do cliente" });
        }
    }
}

export { DetailClienteController }
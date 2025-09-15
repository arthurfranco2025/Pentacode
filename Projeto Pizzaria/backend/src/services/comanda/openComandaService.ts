import { Prisma } from "@prisma/client";
import prismaClient from "../../prisma";

interface OpenComandaRequest {
    cliente_id: string
}

class OpenComandaService {
    async execute({ cliente_id }: OpenComandaRequest) {


        const comanda = await prismaClient.comanda.create({
            data: {
                cliente_id: cliente_id,
                status: "aberta",
                price: 0.0,
                points: 0.0
            },
            select: {
                id: true,
                cliente_id: true,
                created_at: true,
                status: true
            }
        })

        return comanda
    }
}

export { OpenComandaService }
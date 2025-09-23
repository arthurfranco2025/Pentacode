import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

interface createProdutoIngredienteRequest {
    product_id: string
    ingrediente_id: string
}

class CreateProductIngredienteService {
    async execute({ product_id, ingrediente_id }: createProdutoIngredienteRequest) {

        const produto_ingredienteAlreadyExists = await prismaClient.product_ingrediente.findFirst({
            where: {
                product_id: product_id,
                ingrediente_id: ingrediente_id
            }
        })

        const JaExiste = await PrismaClient.product_ingrediente.findFirst({
            where:{
                ingrediente_id,
                product_id,
            },
        }
        )

        if(JaExiste) {
            throw new Error("Esse produto já tem este ingrediente")
        }

        if (produto_ingredienteAlreadyExists) {
            throw new Error("Esse ingrediente já foi adicionado a esse produto")
        }

        if (!product_id) {
            throw new Error("O ID do produto é obrigatório")
        }

        if (!ingrediente_id) {
            throw new Error("O ID do ingrediente é obrigatório")
        }

        const produtoExiste = await prismaClient.product.findFirst({
            where: {
                id: product_id
            }
        })

        if(!produtoExiste) {
            throw new Error("Produto não encontrado")
        }

        const ingredienteExiste = await prismaClient.ingrediente.findFirst({
            where: {
                id: ingrediente_id
            }
        })

        if(!ingredienteExiste) {
            throw new Error("Ingrediente não encontrado")
        }

        const produto_ingrediente = await prismaClient.product_ingrediente.create({
            data: {
                product_id: product_id,
                ingrediente_id: ingrediente_id
            }
        })

        return produto_ingrediente
    }
}

export { CreateProductIngredienteService }
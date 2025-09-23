import PrismaClient from "../../prisma";

interface ListProductRequest {
  name: string;
}

class SearchProductService {
  async execute({ name }: ListProductRequest) {

    if(!name){
        throw new Error('Nenhum produto encontrado')
    }

    const produtos = await PrismaClient.product.findMany({
      where: {
        // Se o usuário passar um nome, filtra por ele
        name: name ? { contains: name, mode: "insensitive" } : undefined,
      },
      orderBy: {
        name: "asc",
      },
    });

    return produtos;
  }
}

export { SearchProductService };
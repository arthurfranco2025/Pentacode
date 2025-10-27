import prismaClient from "../../prisma";

interface FavoritoRequest {
	id: string;
}

class RemoveFavoritoService {
	async execute({ id }: FavoritoRequest) {
		if (!id) {
			throw new Error("ID do favorito é obrigatório");
		}

		const favorito = await prismaClient.favorito.findFirst({
			where: { id },
		});

		if (!favorito) {
			throw new Error("Favorito não encontrado");
		}

		await prismaClient.favorito.delete({
			where: { id },
		});

		return { message: "Favorito removido com sucesso" };
	}
}

export default RemoveFavoritoService;

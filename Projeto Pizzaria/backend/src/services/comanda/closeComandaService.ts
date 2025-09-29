import PrismaClient from "../../prisma";

interface ComandaRequest {
    comanda_id: string;
}

class CloseComandaService {
    async execute({ comanda_id }: ComandaRequest) {
      if (!comanda_id) throw new Error("Id da comanda é obrigatório");
  
      const comandaToUpdate = await PrismaClient.comanda.findUnique({
        where: { id: comanda_id },
        select: {
          id: true,
          cliente_id: true,
          status: true,
          price: true,
          points: true
        }
      });
  
      if (!comandaToUpdate) throw new Error("Comanda não encontrada");
      if (comandaToUpdate.status === "fechada") throw new Error("Essa comanda já está fechada");
  
      const comanda = await PrismaClient.comanda.update({
        where: { id: comandaToUpdate.id },
        data: { status: "fechada" },
        select: {
          id: true,
          cliente_id: true,
          status: true,
          price: true,
          points: true
        }
      });
  
      const pontosCliente = comanda.price * 0.25;
  
      await PrismaClient.cliente.update({
        where: { id: comanda.cliente_id },
        data: { points: { increment: pontosCliente } }
      });
  
      return comanda;
    }
  }

export { CloseComandaService }
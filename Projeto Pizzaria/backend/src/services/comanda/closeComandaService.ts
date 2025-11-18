import PrismaClient from "../../prisma";

interface ComandaRequest {
  comanda_id: string;
  tipoPagamento?: string;
}

class CloseComandaService {
  async execute({ comanda_id, tipoPagamento }: ComandaRequest) {
    if (!comanda_id) throw new Error("Id da comanda é obrigatório");

    const comandaToUpdate = await PrismaClient.comanda.findUnique({
      where: { id: comanda_id },
      select: {
        id: true,
        cliente_id: true,
        status: true,
        price: true,
      }
    });

    if (!comandaToUpdate) throw new Error("Comanda não encontrada");
    if (comandaToUpdate.status === "fechada")
      throw new Error("Essa comanda já está fechada");

    const cliente = await PrismaClient.cliente.findUnique({
      where: { id: comandaToUpdate.cliente_id },
      select: { id: true, points: true }
    });
    if (!cliente) throw new Error("Cliente não encontrado");

    // --- CORREÇÃO: somar pontos reais dos pedidos ---
    const totalPontosPedidos = await PrismaClient.pedido.aggregate({
      where: { comanda_id },
      _sum: { points: true }
    });

    const pontosPagar = totalPontosPedidos._sum.points || 0;
    // -------------------------------------------------

    // Bônus de 25% sobre o valor em dinheiro
    const bonusEmPontos = comandaToUpdate.price * 0.25;

    // Saldo final = pontos atuais - pontos usados + bônus em pontos
    const saldoFinal = cliente.points - pontosPagar + bonusEmPontos;

    // Valida se tem pontos para pagar a parte em pontos
    if (pontosPagar > 0 && cliente.points < pontosPagar) {
      throw new Error(
        "O cliente não tem pontos suficientes para pagar a parte em pontos"
      );
    }

    // ----- TRANSAÇÃO -----
    const resultado = await PrismaClient.$transaction(async (tx) => {
      // 1. Atualiza pontos do cliente
      const clienteAtualizado = await tx.cliente.update({
        where: { id: cliente.id },
        data: {
          points: saldoFinal
        }
      });

      // 2. Fecha a comanda e salva os pontos pagos
      const comandaFechada = await tx.comanda.update({
        where: { id: comandaToUpdate.id },
        data: {
          status: "fechada",
          pontosPagos: pontosPagar
        },
        select: {
          id: true,
          cliente_id: true,
          status: true,
          price: true
        }
      });

      // 3. Zera os pontos dos pedidos
      await tx.pedido.updateMany({
        where: { comanda_id: comandaToUpdate.id },
        data: { points: 0 }
      });

      return { comandaFechada, clienteAtualizado };
    });

    return resultado.comandaFechada;
  }
}

export { CloseComandaService };
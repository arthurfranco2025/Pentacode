import PrismaClient from "../../prisma";

interface PagarRequest {
    comanda_id: string;
    tipoPagamento?: string;
    payWithPoints?: boolean;
}

class PagarComandaService {
    async execute({ comanda_id, tipoPagamento, payWithPoints }: PagarRequest) {

        if (!comanda_id) {
            throw new Error('Insira a comanda');
        }

        const comanda = await PrismaClient.comanda.findUnique({ where: { id: comanda_id } });

        if (!comanda) {
            throw new Error('Comanda não encontrada');
        }

        if (comanda.status === "aguardando pagamento") {
            throw new Error('Pagamento já solicitado');
        }

        if (comanda.status === 'fechada') {
            throw new Error('Essa comanda está fechada');
        }

        // Fluxo: pagar com pontos
        if (payWithPoints) {
            const cliente = await PrismaClient.cliente.findUnique({ where: { id: comanda.cliente_id } });
            if (!cliente) throw new Error('Cliente não encontrado');

            if (comanda.points > cliente.points) {
                throw new Error('O cliente não tem pontos suficientes pra pagar essa comanda');
            }

            // decrementar pontos do cliente
            await PrismaClient.cliente.update({ where: { id: cliente.id }, data: { points: { decrement: comanda.points } } });

            const comandaAtualizada = await PrismaClient.comanda.update({
                where: { id: comanda_id },
                data: {
                    status: 'fechada',
                    tipoPagamento: 'pontos',
                    pagoEm: new Date(),
                    pontosPagos: comanda.points
                },
                select: {
                    id: true,
                    cliente_id: true,
                    price: true,
                    points: true,
                    status: true,
                    tipoPagamento: true,
                    pagoEm: true
                }
            });

            return comandaAtualizada;
        }

        // Fluxo: pagar com forma de pagamento normal
        if (!tipoPagamento) {
            throw new Error('Informe a forma de pagamento');
        }

        const tipoPagamentoValidos = [
            'pix',
            'crédito',
            'débito',
            'dinheiro',
            'vale refeição'
        ];

        if (!tipoPagamentoValidos.includes(tipoPagamento)) {
            throw new Error('Forma de pagamento inválida. Válidas: ' + tipoPagamentoValidos.join(', '));
        }

        const pagarComanda = await PrismaClient.comanda.update({
            where: { id: comanda_id },
            data: {
                status: 'aguardando pagamento',
                tipoPagamento: tipoPagamento,
                pagoEm: new Date(),
                pontosPagos: comanda.points
            },
            select: {
                id: true,
                cliente_id: true,
                price: true,
                points: true,
                status: true,
                tipoPagamento: true,
                pagoEm: true
            }
        });

        return pagarComanda;
    }
}

export { PagarComandaService };

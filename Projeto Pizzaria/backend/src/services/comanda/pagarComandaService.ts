import PrismaClient from "../../prisma";

interface PagarRequest {
    comanda_id: string;
    tipoPagamento: string;
}

class PagarComandaService {
    async execute({ comanda_id, tipoPagamento }: PagarRequest) {

        if (!comanda_id) {
            throw new Error('Insira a comanda');
        }

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

        const comanda = await PrismaClient.comanda.findFirst({
            where: { id: comanda_id }
        });

        if (!comanda) {
            throw new Error('Comanda não encontrada');
        }

        if (comanda.status === "aguardando pagamento") {
            throw new Error('Pagamento já solicitado');
        }

        if (comanda.status === 'fechada') {
            throw new Error('Essa comanda está fechada');
        }

        const pagarComanda = await PrismaClient.comanda.update({
            where: { id: comanda_id },
            data: {
                status: 'aguardando pagamento',
                tipoPagamento: tipoPagamento,
                pagoEm: new Date()
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

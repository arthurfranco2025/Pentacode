import cron from 'node-cron';
import prismaClient from "../../prisma"; // ajuste o caminho conforme necessário

// Agendamento: todo dia à meia-noite
cron.schedule(' 0 * * * * ', async () => {
    try {
        const deleted = await prismaClient.cliente.deleteMany({
            where: {
                name: { startsWith: "Convidado_" },
                comandas: {
                    none: {
                        status: { in: ["aberta", "aguardando pagamento"] }
                    }
                }
            }
        });
        console.log(`Clientes convidados deletados automaticamente: ${deleted.count}`);
    } catch (err: any) {
        console.error("Erro ao deletar convidados inativos:", err.message);
    }
});

import cron from 'node-cron';
import prismaClient from "../../prisma";


cron.schedule('0 * * * *', async () => {
  try {
 
    const convidados = await prismaClient.cliente.findMany({
      where: {
        name: { startsWith: "Convidado_" },
        comandas: {
          none: {
            status: { in: ["aberta", "aguardando pagamento"] }
          }
        }
      },
      select: { id: true }
    });

    const ids = convidados.map(c => c.id);
    if (ids.length === 0) {
      console.log("Nenhum cliente convidado para deletar.");
      return;
    }

   
    const delItemAdicional = await prismaClient.item_adicional.deleteMany({
      where: {
        item: {
          pedido: { cliente_id: { in: ids } }
        }
      }
    });
    console.log(`item_adicional deletados: ${delItemAdicional.count}`);

   
    const delItems = await prismaClient.item.deleteMany({
      where: {
        pedido: {
          cliente_id: { in: ids }
        }
      }
    });
    console.log(`items deletados: ${delItems.count}`);

    
    const delPedidos = await prismaClient.pedido.deleteMany({
      where: {
        cliente_id: { in: ids }
      }
    });
    console.log(`pedidos deletados: ${delPedidos.count}`);

    
    const delComandas = await prismaClient.comanda.deleteMany({
      where: {
        cliente_id: { in: ids },
        status: { notIn: ["aberta", "aguardando pagamento"] }
      }
    });
    console.log(`comandas deletadas: ${delComandas.count}`);

    const delClientes = await prismaClient.cliente.deleteMany({
      where: {
        id: { in: ids }
      }
    });
    console.log(`clientes convidados deletados automaticamente: ${delClientes.count}`);

  } catch (err: any) {
    console.error("Erro ao deletar convidados inativos:", err.message || err);
  }
});

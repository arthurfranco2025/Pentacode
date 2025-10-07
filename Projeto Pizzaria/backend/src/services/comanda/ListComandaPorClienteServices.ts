import prismaClient from "../../prisma"

interface ListComandaPorClienteRequest {
  cliente_id: string
}

class ListComandaPorClienteService {
  async execute({ cliente_id }: ListComandaPorClienteRequest) {
    const clienteComComandas = await prismaClient.cliente.findUnique({
      where: {
        id: cliente_id,
      },
      select: {
        name: true, // Adiciona o nome do cliente
        comandas: true,
      },
    })

    if (!clienteComComandas) {
      throw new Error("Cliente não encontrado")
    }

    return {
      nomeCliente: clienteComComandas.name,
      comandas: clienteComComandas.comandas
    }
  }
}

export { ListComandaPorClienteService }

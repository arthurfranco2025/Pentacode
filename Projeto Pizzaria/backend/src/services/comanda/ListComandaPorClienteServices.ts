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
      include: {
        comandas: true,
      },
    })

    if (!clienteComComandas) {
      throw new Error("Cliente não encontrado")
    }

    return clienteComComandas.comandas
  }
}

export { ListComandaPorClienteService }

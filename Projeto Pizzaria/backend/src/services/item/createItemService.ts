import PrismaClient from "../../prisma";

interface CreateItemRequest {
  product_id: string;
  pedido_id: string;
  qtd: number;
  product2_id?: string; 
  removidos?: { id: string }[];
  adicionais?: { id: string }[];
  observacoes?: string;
}

class CreateItemService {
  async execute({
    product_id,
    pedido_id,
    qtd,
    product2_id,
    removidos,
    adicionais,
    observacoes,
  }: CreateItemRequest) {

   
    if (!pedido_id) throw new Error("É preciso ter um pedido para criar um item");
    if (!product_id) throw new Error("É preciso ter um produto");
    if (!qtd || qtd <= 0) throw new Error("Quantidade inválida");


    const produto = await PrismaClient.product.findUnique({
      where: { id: product_id },
      include: { category: true }
    });

    if (!produto) throw new Error("O produto não existe");

 
    let produto2 = null;
    if (product2_id) {
      produto2 = await PrismaClient.product.findUnique({
        where: { id: product2_id },
        include: { category: true }
      });
      if (!produto2) throw new Error("O segundo sabor não existe");

      
      const categoriasPermitidas = ["Pizzas salgadas", "Pizzas doces"];
      const categorias = [produto.category, produto2.category];
      const todasSaoPizza = categorias.every(c => categoriasPermitidas.includes(c.name));

      if (!todasSaoPizza) {
        throw new Error("Meio a meio só é permitido para pizzas salgadas ou doces");
      }
    }

    
    let precoFinal = qtd * produto.price;
    let pontosFinal = qtd * produto.points;

    if (produto2) {
      
      precoFinal = qtd * ((produto.price / 2) + (produto2.price / 2) + 10);
      pontosFinal = qtd * ((produto.points / 2) + (produto2.points / 2) + 10);
    }

 
    const item = await PrismaClient.item.create({
      data: {
        pedido: { connect: { id: pedido_id } },
        product: { connect: { id: product_id } },
        product2: produto2 ? { connect: { id: product2_id } } : undefined,
        qtd,
        price: precoFinal,
        points: pontosFinal,
        dois_sabores: !!produto2,
        removidos: removidos && removidos.length > 0 ? removidos : null,
        adicionais: adicionais && adicionais.length > 0 ? adicionais : null,
        observacoes: observacoes || null,
      },
      select: {
        id: true,
        product_id: true,
        product2_id: true,
        qtd: true,
        price: true,
        pedido_id: true,
        dois_sabores: true,
        removidos: true,
      },
    });

    const cliente = await PrismaClient.pedido.findFirst({
      where:{
        id : pedido_id
      },
       select :{
         cliente_id: true
       }
    })

     await PrismaClient.pedido.update({
       where:{
         id : pedido_id
       },
       data:{
         price: {
           increment: precoFinal
         },
         points:{
          increment : pontosFinal
         }
       }
     })

     const comanda = await  PrismaClient.comanda.findFirst({
       where:{
         cliente_id : cliente.cliente_id
       },
       select:{
        id : true
       }
     })

     await PrismaClient.comanda.update({
      where:{
        id : comanda.id
      },
      data:{
        price:{
          increment : precoFinal
        },
        points :{
          increment : pontosFinal
        }
      }
     })

    return { item, mensagem: "Item criado com sucesso" };

  }
}

export { CreateItemService };

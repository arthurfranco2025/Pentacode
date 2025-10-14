import prismaClient from "../../prisma";
import { cloudinary } from "../../config/cloudinary";

interface BannerUpload {
  buffer: Buffer;
  mimeType: string;
}

interface CreateRequest {
  name: string;
  price: number;
  points: number;
  description: string;
  promocao?: boolean;
  category_id: string;
  banner?: string | BannerUpload; // Pode ser URL ou objeto de upload
}

class CreateProductService {
  async execute({ name, price, points, description, promocao, category_id, banner }: CreateRequest) {
    if (!name) throw new Error("Insira o nome do produto");
    if (!price) throw new Error("Insira o preço do produto");
    if (!points) throw new Error("Insira os pontos do produto");

    const productAlreadyExists = await prismaClient.product.findFirst({
      where: { name : name},
    });

    if(productAlreadyExists){
      throw new Error('Esse produto já existe, caso queira muda-lo vá em EDIT PRODUTO')
    }

    let imageUrl: string | undefined;

    if (banner) {
      if (typeof banner === "string") {
        imageUrl = banner;
      } else {
        try {
          // Convertemos o buffer para base64 antes de enviar
          const bufferToBase64 = banner.buffer.toString("base64");
          const dataUri = `data:${banner.mimeType};base64,${bufferToBase64}`;

          const uploadResult = await cloudinary.uploader.upload(dataUri, {
            folder: "produtos",
            resource_type: "image",
          });

          imageUrl = uploadResult.secure_url;
        } catch (error) {
          throw new Error("Falha ao enviar a imagem para o Cloudinary: " + error);
        }
      }
    }
    

    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        points,
        description,
        promocao,
        category_id,
        image_url: imageUrl,
      },
    });

    return product;
  }
}

export { CreateProductService };
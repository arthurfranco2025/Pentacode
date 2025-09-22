import prismaClient from "../../prisma";
import { cloudinary } from "../../config/cloudinary";

interface BannerUpload {
  buffer: Buffer;
  mimeType: string;
}

interface CategoryRequest {
    name: string
    image_url: string | BannerUpload // URL da imagem no Cloudinary
}


class CreateCategoryService {
    async execute({ name, image_url }: CategoryRequest) {

        if (name === '') {
            throw new Error('Name invalid')
        }

        if(name){
            const categoryAlreadyExists = await prismaClient.category.findFirst({
                where:{
                    name: name
                }
            })

            if (categoryAlreadyExists) {
                throw new Error("Categoria já existe");
            }
        }

        let imageUrl: string | undefined;
        
            if (image_url) {
              if (typeof image_url === "string") {
                // Se já for uma URL, apenas atribui
                imageUrl = image_url;
              } else {
                try {
                  // Convertemos o buffer para base64 antes de enviar
                  const bufferToBase64 = (image_url as BannerUpload).buffer.toString("base64");
                  const dataUri = `data:${(image_url as BannerUpload).mimeType};base64,${bufferToBase64}`;

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

        const category = await prismaClient.category.create({
            data: {
                name: name,
                image_url: imageUrl,
            },
            select:{
                id: true,
                name: true,
                image_url: true
            }
        })

        return category

    }
}

export { CreateCategoryService }
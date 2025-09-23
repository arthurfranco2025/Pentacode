import PrismaClient from "../../prisma";
import { cloudinary } from "../../config/cloudinary";

interface BannerUpload {
  buffer: Buffer;
  mimeType: string;
}

interface ListProductRequest{
    category_id: string
    // image_url?: string | BannerUpload // URL da imagem no Cloudinary
}

class ListProductByCategory{
    async execute({category_id}: ListProductRequest){

        if(!category_id){
            throw new Error('Insira uma categoria')
        }

        const categoria = await PrismaClient.category.findUnique({
            where: {
                id: category_id
            }
        })

        if(category_id){

            if(!categoria){
                throw new Error('A categoria não existe')
            }
        }

        // let imageUrl: string | undefined;
                
        // if (image_url) {
        //     if (typeof image_url === "string") {
        //     // Se já for uma URL, apenas atribui
        //     imageUrl = image_url;
        //     } else {
        //         try {
        //             // Convertemos o buffer para base64 antes de enviar
        //             const bufferToBase64 = (image_url as BannerUpload).buffer.toString("base64");
        //             const dataUri = `data:${(image_url as BannerUpload).mimeType};base64,${bufferToBase64}`;

        //             const uploadResult = await cloudinary.uploader.upload(dataUri, {
        //             folder: "produtos",
        //             resource_type: "image",
        //             });
        
        //             imageUrl = uploadResult.secure_url;
        //         } catch (error) {
        //             throw new Error("Falha ao enviar a imagem para o Cloudinary: " + error);
        //         }
        //     }
        // }

        const lista = await PrismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return lista
    }   
}

export { ListProductByCategory }
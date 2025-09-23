import PrismaClient from "../../prisma";
import { cloudinary } from "../../config/cloudinary";

interface EditCategoryRequest {
    category_id: string;
    name?: string;
    image?: Express.Multer.File | string; // pode ser multer file ou string
}

class EditCategoryService {
    async execute({ category_id, name, image }: EditCategoryRequest) {

        if (!category_id) {
            throw new Error('Insira a categoria');
        }

        // Verifica se a categoria existe
        const categoriaExiste = await PrismaClient.category.findFirst({
            where: { id: category_id }
        });
        

        if (!categoriaExiste) {
            throw new Error('Essa categoria não existe');
        }
        
        let imageUrl: string | undefined;

        // Se a imagem for um arquivo do multer, faz upload no Cloudinary
        if (image && typeof image !== "string") {
            const upload = await cloudinary.uploader.upload(image.path, {
                folder: "categories"
            });
            imageUrl = upload.secure_url;
        } else if (typeof image === "string") {
            // Se já for uma URL, mantém
            imageUrl = image;
        }

        // Monta os dados para atualização
        const data: any = { name };
        if (imageUrl) {
            data.image_url = imageUrl;
        }

        const editCategory = await PrismaClient.category.update({
            where: { id: category_id },
            data
        });

        return editCategory;
    }
}

export { EditCategoryService };
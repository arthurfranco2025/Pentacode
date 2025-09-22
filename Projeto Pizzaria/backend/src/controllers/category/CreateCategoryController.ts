import {Request, Response} from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'
import { v2 as cloudinary } from 'cloudinary'

class CreateCategoryController{
    async handle(req: Request, res: Response) {
        try {
            const { name } = req.body
            const createCategoryService = new CreateCategoryService()

               if (!req.file) {
                throw new Error("Erro no upload da imagem");
            }

            const file = req.file;

            const resultFile = await cloudinary.uploader.upload(file.path, {
                folder: "categorias",
                resource_type: "image",
            })
            
            const category = await createCategoryService.execute({
                name,
                image_url: resultFile.secure_url, // URL da imagem no Cloudinary
            })

            return res.json(category)
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
        
    }
}

export {CreateCategoryController}
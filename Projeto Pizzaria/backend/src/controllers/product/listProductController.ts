import { Request, Response } from 'express/'
import { ListProductByCategory } from '../../services/product/listProductService'
import { v2 as cloudinary } from 'cloudinary'

class ListProductByCategoryController{
    async handle(req: Request, res: Response){
        try{

            const { category_id } = req.body

            const listProductService = new ListProductByCategory()
             
            if (!req.file) {
                throw new Error("Erro no upload da imagem");
            }

            const file = req.file;

            const resultFile = await cloudinary.uploader.upload(file.path, {
                folder: "produtos",
                resource_type: "image",
            })

            const produtosPorCategoria = await listProductService.execute({
                category_id,
                image_url: resultFile.secure_url
            });

            return res.json(produtosPorCategoria)

        }catch (error: any){
            return res.status(400).json({ error: error.message });
        }
    }
}

export { ListProductByCategoryController }
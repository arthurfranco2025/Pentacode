import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { name, price, points, description, promocao, category_id } = req.body;
      const createProductService = new CreateProductService();

      // Verifica se o arquivo foi enviado
      if (!req.file) {
        throw new Error("Erro no upload da imagem");
      }

      const file = req.file;

      // Faz o upload para o Cloudinary usando o caminho do arquivo
      const resultFile = await cloudinary.uploader.upload(file.path, {
        folder: "produtos",
        resource_type: "image",
      });

      // Opcional: remove o arquivo temporário depois do upload
      fs.unlink(file.path, (err) => {
        if (err) console.error("Erro ao remover arquivo temporário:", err);
      });

      // Cria o produto no banco
      const product = await createProductService.execute({
        name,
        price: Number(price),
        points: Number(points),
        description,
        promocao: promocao === 'true' || promocao === true,
        category_id,
        banner: resultFile.secure_url, // URL da imagem no Cloudinary
      });

      return res.json(product);

    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateProductController };

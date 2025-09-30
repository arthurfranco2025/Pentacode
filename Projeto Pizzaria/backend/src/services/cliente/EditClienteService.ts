import prismaClient from "../../prisma";
import { compare, hash } from "bcryptjs";
import { cloudinary } from "../../config/cloudinary";
import type { Express } from "express";

type BannerUpload = Express.Multer.File;

interface EditClienteRequest {
  banner?: string | BannerUpload;
  userId: string; // ID vindo do token
  novoName?: string;
  novoEmail?: string;
  confirmEmail?: string;
  oldPassword?: string;
  novoPassword?: string;
  confirmPassword?: string;
}

class EditClienteService {
  async execute({
    banner,
    userId,
    novoName,
    novoEmail,
    confirmEmail,
    oldPassword,
    novoPassword,
    confirmPassword,
  }: EditClienteRequest) {
    const dataToUpdate: { name?: string; email?: string; password?: string; image_url?: string } = {};

    // Buscar cliente atual
    const clienteAtual = await prismaClient.cliente.findUnique({
      where: { id: userId },
    });

    if (!clienteAtual) {
      throw new Error("Cliente não encontrado.");
    }

    // ===== Upload de imagem =====
    if (banner) {
      if (typeof banner === "string") {
        dataToUpdate.image_url = banner;
      } else {
        try {
          let uploadResult;

          if (banner.buffer) {
            // memoryStorage
            const bufferToBase64 = banner.buffer.toString("base64");
            const dataUri = `data:${banner.mimetype};base64,${bufferToBase64}`;
            uploadResult = await cloudinary.uploader.upload(dataUri, {
              folder: "clientes",
              resource_type: "image",
            });
          } else if ((banner as any).path) {
            // diskStorage
            uploadResult = await cloudinary.uploader.upload((banner as any).path, {
              folder: "clientes",
              resource_type: "image",
            });
          } else {
            throw new Error("Arquivo inválido para upload.");
          }

          dataToUpdate.image_url = uploadResult.secure_url;
        } catch (error) {
          throw new Error("Falha ao enviar a imagem para o Cloudinary: " + error);
        }
      }
    }

    // ===== Atualizar nome =====
    if (novoName && novoName !== clienteAtual.name) {
      dataToUpdate.name = novoName;
    }

    // ===== Atualizar email =====
    if (novoEmail) {
      if (novoEmail !== confirmEmail) {
        throw new Error("O email e a confirmação de email não são os mesmos.");
      }

      if (novoEmail === clienteAtual.email) {
        throw new Error("O novo email é igual ao atual.");
      }

      const clienteComMesmoEmail = await prismaClient.cliente.findFirst({
        where: { email: novoEmail },
      });

      if (clienteComMesmoEmail) {
        throw new Error("Já existe um cliente com esse e-mail.");
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(novoEmail)) {
        throw new Error("Email inválido.");
      }

      dataToUpdate.email = novoEmail;
    }

    // ===== Atualizar senha =====
    if (novoPassword) {
      if (!oldPassword) {
        throw new Error("A senha antiga é obrigatória para alterar a senha.");
      }

      const senhaAtualCorreta = await compare(oldPassword, clienteAtual.password);
      if (!senhaAtualCorreta) {
        throw new Error("A senha antiga está incorreta.");
      }

      const senhaIgual = await compare(novoPassword, clienteAtual.password);
      if (senhaIgual) {
        throw new Error("A nova senha não pode ser igual à senha antiga.");
      }

      if (novoPassword !== confirmPassword) {
        throw new Error("A nova senha e a confirmação de senha não são iguais.");
      }

      const senhaSegura = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#./+¨()]{8,}$/;
      if (!senhaSegura.test(novoPassword)) {
        throw new Error("A nova senha deve ter pelo menos 8 caracteres, incluindo letras e números.");
      }

      dataToUpdate.password = await hash(novoPassword, 8);
    }

    // Se não houver mudanças
    if (Object.keys(dataToUpdate).length === 0) {
      throw new Error("Nenhuma alteração foi realizada. Informe novos dados.");
    }

    // Atualiza o cliente
    const clienteAtualizado = await prismaClient.cliente.update({
      where: { id: userId },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        email: true,
        image_url: true,
      },
    });

    return clienteAtualizado;
  }
}

export { EditClienteService };
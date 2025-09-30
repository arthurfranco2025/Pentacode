import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma/index";
import { compare, hash } from "bcryptjs";
import { cloudinary } from "../../config/cloudinary";
import type { Express } from "express";

const prisma = prismaClient;

type BannerUpload = Express.Multer.File;

interface EditClienteRequest {
  banner?: string | BannerUpload;
  userId: string;
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
    const dataToUpdate: {
      name?: string;
      email?: string;
      password?: string;
      image_url?: string;
    } = {};

    const clienteAtual = await prisma.cliente.findUnique({ where: { id: userId } });
    if (!clienteAtual) throw new Error("Cliente não encontrado");

    // 1️⃣ Tratar banner
    let imageUrl: string | undefined;
    if (banner) {
      if (typeof banner === "string") {
        imageUrl = banner; // URL
      } else {
        if (!banner.buffer) throw new Error("Arquivo de imagem inválido");
        const bufferToBase64 = banner.buffer.toString("base64");
        const dataUri = `data:${banner.mimetype};base64,${bufferToBase64}`;
        const uploadResult = await cloudinary.uploader.upload(dataUri, {
          folder: "produtos",
          resource_type: "image",
        });
        imageUrl = uploadResult.secure_url;
      }
      dataToUpdate.image_url = imageUrl;
    }

    // 2️⃣ Nome
    if (novoName) {
      if (novoName === clienteAtual.name) throw new Error("O novo nome é igual ao atual.");
      dataToUpdate.name = novoName;
    }

    // 3️⃣ Email
    if (novoEmail) {
      if (novoEmail !== confirmEmail) throw new Error("Email e confirmação diferentes");
      if (novoEmail === clienteAtual.email) throw new Error("O novo email é igual ao atual");
      const clienteComMesmoEmail = await prisma.cliente.findFirst({ where: { email: novoEmail } });
      if (clienteComMesmoEmail) throw new Error("Já existe um cliente com esse e-mail");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(novoEmail)) throw new Error("Email inválido");
      dataToUpdate.email = novoEmail;
    }

    // 4️⃣ Senha
    if (novoPassword) {
      if (!oldPassword) throw new Error("Senha antiga obrigatória");
      const senhaAtualCorreta = await compare(oldPassword, clienteAtual.password);
      if (!senhaAtualCorreta) throw new Error("Senha antiga incorreta");
      const senhaIgual = await compare(novoPassword, clienteAtual.password);
      if (senhaIgual) throw new Error("A nova senha não pode ser igual à antiga");
      if (novoPassword !== confirmPassword) throw new Error("Nova senha e confirmação diferentes");
      const senhaSegura = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#./+¨()]{8,}$/;
      if (!senhaSegura.test(novoPassword)) throw new Error(
        "A nova senha deve ter pelo menos 8 caracteres, incluindo letras e números"
      );
      dataToUpdate.password = await hash(novoPassword, 8);
    }

    const clienteAtualizado = await prisma.cliente.update({
      where: { id: userId },
      data: dataToUpdate,
      select: { id: true, name: true, email: true, image_url: true },
    });

    return clienteAtualizado;
  }
}

export { EditClienteService };
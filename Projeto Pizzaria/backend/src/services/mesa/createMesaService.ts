import PrismaClient from "../../prisma";
import QRCode from "qrcode";

interface CreateMesaRequest {
  numero: number;
}

class CreateMesaService {
  async execute({ numero }: CreateMesaRequest) {
    // 🔎 validação
    if (!numero || numero <= 0) {
      throw new Error("Número da mesa inválido");
    }

    // 🔎 verifica se já existe mesa com esse número
    const mesaExiste = await PrismaClient.mesa.findUnique({
      where: { numero_mesa : numero },
    });

    if (mesaExiste) {
      throw new Error("Já existe uma mesa com esse número");
    }

    // 📝 cria mesa
    const mesa = await PrismaClient.mesa.create({
      data: {
        numero_mesa: numero,
      },
    });

    // 🔗 gera URL que o QRCode vai apontar
    const urlMesa = `https://10.65.105.46/comanda/${mesa.id}`;

    // 🖼️ gera QRCode em base64
    const qrCodeDataURL = await QRCode.toDataURL(urlMesa);

    return {
      ...mesa,
      qrCode: qrCodeDataURL,
    };
  }
}

export { CreateMesaService };
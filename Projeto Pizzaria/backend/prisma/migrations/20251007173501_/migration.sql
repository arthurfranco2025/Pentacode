-- AlterTable
ALTER TABLE "public"."comandas" ADD COLUMN     "pagoEm" TIMESTAMP(3),
ADD COLUMN     "tipoPagamento" TEXT NOT NULL DEFAULT 'não informado';

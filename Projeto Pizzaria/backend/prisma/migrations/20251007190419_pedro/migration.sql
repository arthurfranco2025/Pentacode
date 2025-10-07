-- AlterTable
ALTER TABLE "public"."comandas" ALTER COLUMN "tipoPagamento" DROP NOT NULL,
ALTER COLUMN "tipoPagamento" DROP DEFAULT;

/*
  Warnings:

  - Made the column `tipoPagamento` on table `comandas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."comandas" ALTER COLUMN "tipoPagamento" SET NOT NULL,
ALTER COLUMN "tipoPagamento" SET DEFAULT 'nulo';

/*
  Warnings:

  - The `qtd` column on the `product_ingrediente` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."product_ingrediente" DROP COLUMN "qtd",
ADD COLUMN     "qtd" BOOLEAN NOT NULL DEFAULT true;

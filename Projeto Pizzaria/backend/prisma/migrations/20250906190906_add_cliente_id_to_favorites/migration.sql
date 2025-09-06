/*
  Warnings:

  - Added the required column `cliente_id` to the `favorites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" ALTER COLUMN "data_nasc" DROP NOT NULL,
ALTER COLUMN "data_nasc" DROP DEFAULT;

-- AlterTable
ALTER TABLE "favorites" ADD COLUMN     "cliente_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

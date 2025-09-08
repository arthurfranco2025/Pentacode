/*
  Warnings:

  - You are about to drop the column `order_id` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `banner` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comanda_id` to the `avaliacoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pedido_id` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtd` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promocao` to the `products` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."avaliacoes" DROP CONSTRAINT "avaliacoes_order_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."items" DROP CONSTRAINT "items_order_id_fkey";

-- AlterTable
ALTER TABLE "public"."avaliacoes" DROP COLUMN "order_id",
ADD COLUMN     "comanda_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."categories" DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."clientes" DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."favorites" DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."items" DROP COLUMN "amount",
DROP COLUMN "order_id",
DROP COLUMN "update_at",
ADD COLUMN     "pedido_id" TEXT NOT NULL,
ADD COLUMN     "qtd" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."products" DROP COLUMN "banner",
DROP COLUMN "update_at",
ADD COLUMN     "points" INTEGER NOT NULL,
ADD COLUMN     "promocao" BOOLEAN NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."orders";

-- DropTable
DROP TABLE "public"."users";

-- CreateTable
CREATE TABLE "public"."funcionarios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pedidos" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "cliente_id" TEXT NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."comandas" (
    "id" TEXT NOT NULL,
    "table" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "cliente_id" TEXT NOT NULL,
    "pedido_id" TEXT NOT NULL,

    CONSTRAINT "comandas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."pedidos" ADD CONSTRAINT "pedidos_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "public"."clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comandas" ADD CONSTRAINT "comandas_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "public"."clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comandas" ADD CONSTRAINT "comandas_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "public"."pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."avaliacoes" ADD CONSTRAINT "avaliacoes_comanda_id_fkey" FOREIGN KEY ("comanda_id") REFERENCES "public"."comandas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."items" ADD CONSTRAINT "items_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "public"."pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

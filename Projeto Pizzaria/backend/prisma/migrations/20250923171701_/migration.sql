-- AlterTable
ALTER TABLE "public"."comandas" ADD COLUMN     "mesa_id" TEXT;

-- CreateTable
CREATE TABLE "public"."mesas" (
    "id" TEXT NOT NULL,
    "numero_mesa" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mesas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."comandas" ADD CONSTRAINT "comandas_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "public"."mesas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "public"."items" ADD COLUMN     "dois_sabores" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "product2_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."items" ADD CONSTRAINT "items_product2_id_fkey" FOREIGN KEY ("product2_id") REFERENCES "public"."products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

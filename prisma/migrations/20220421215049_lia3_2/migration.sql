/*
  Warnings:

  - You are about to drop the column `desgloseCotizacion` on the `CotizacionTecnico` table. All the data in the column will be lost.
  - You are about to drop the column `solucion_tecnico` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `solucion_tecnico` to the `CotizacionTecnico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cotizacionTecnicoId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CotizacionTecnico" DROP COLUMN "desgloseCotizacion",
ADD COLUMN     "solucion_tecnico" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "solucion_tecnico",
ADD COLUMN     "cotizacionTecnicoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_cotizacionTecnicoId_fkey" FOREIGN KEY ("cotizacionTecnicoId") REFERENCES "CotizacionTecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

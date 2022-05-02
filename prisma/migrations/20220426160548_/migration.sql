/*
  Warnings:

  - You are about to drop the column `checkin` on the `Imagen` table. All the data in the column will be lost.
  - You are about to drop the column `checkout` on the `Imagen` table. All the data in the column will be lost.
  - You are about to drop the column `firma_conformidad` on the `Imagen` table. All the data in the column will be lost.
  - You are about to drop the column `solucion` on the `Imagen` table. All the data in the column will be lost.
  - You are about to drop the column `ticketId` on the `Imagen` table. All the data in the column will be lost.
  - You are about to drop the column `cotizacionTecnicoId` on the `Ticket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ticketId]` on the table `CotizacionTecnico` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ticketId` to the `CotizacionTecnico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Imagen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Imagen` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Imagen" DROP CONSTRAINT "Imagen_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_cotizacionTecnicoId_fkey";

-- DropIndex
DROP INDEX "Imagen_ticketId_key";

-- AlterTable
ALTER TABLE "CotizacionTecnico" ADD COLUMN     "ticketId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Imagen" DROP COLUMN "checkin",
DROP COLUMN "checkout",
DROP COLUMN "firma_conformidad",
DROP COLUMN "solucion",
DROP COLUMN "ticketId",
ADD COLUMN     "cotizacionTecnicoId" INTEGER,
ADD COLUMN     "descripcion" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "cotizacionTecnicoId";

-- CreateTable
CREATE TABLE "AcuerdoConformidad" (
    "id" SERIAL NOT NULL,
    "expediente" TEXT NOT NULL,
    "fecha_acuerdo" TIMESTAMP(3) NOT NULL,
    "problema" TEXT NOT NULL,
    "asistencia" TEXT NOT NULL,
    "nombre_asesor" TEXT NOT NULL,
    "descripcion_problema" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "usuario_final" TEXT NOT NULL,
    "hora_recepcion_servicio" TIMESTAMP(3) NOT NULL,
    "hora_llegada_servicio" TIMESTAMP(3) NOT NULL,
    "hora_finalizacion_servicio" TIMESTAMP(3) NOT NULL,
    "acuerdo_firmado" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "AcuerdoConformidad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AcuerdoConformidad_id_key" ON "AcuerdoConformidad"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CotizacionTecnico_ticketId_key" ON "CotizacionTecnico"("ticketId");

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_cotizacionTecnicoId_fkey" FOREIGN KEY ("cotizacionTecnicoId") REFERENCES "CotizacionTecnico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CotizacionTecnico" ADD CONSTRAINT "CotizacionTecnico_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

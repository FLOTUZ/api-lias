/*
  Warnings:

  - You are about to drop the column `costo_mano_obra` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `costo_materiales` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `cotizacion_total_tecnico` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `hora_contacto` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Aseguradora" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Asistencia" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ciudad" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Imagen" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Seguimiento" ALTER COLUMN "nombre_asesor_seguro" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Servicio" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tecnico" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "costo_mano_obra",
DROP COLUMN "costo_materiales",
DROP COLUMN "cotizacion_total_tecnico",
DROP COLUMN "hora_contacto",
ALTER COLUMN "num_expediente" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UsuarioFinal" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "CotizacionTecnico" (
    "id" SERIAL NOT NULL,
    "desgloseCotizacion" TEXT NOT NULL,
    "fecha_contacto" TIMESTAMP(3) NOT NULL,
    "costo_mano_obra" MONEY NOT NULL,
    "costo_materiales" MONEY NOT NULL,
    "total_cotizacion" MONEY NOT NULL,

    CONSTRAINT "CotizacionTecnico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CotizacionTecnico_id_key" ON "CotizacionTecnico"("id");

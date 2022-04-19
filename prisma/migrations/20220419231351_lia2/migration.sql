/*
  Warnings:

  - You are about to drop the column `abrir_ticket` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `cerrar_ticket` on the `Usuario` table. All the data in the column will be lost.
  - Made the column `updatedAt` on table `Ciudad` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Servicio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Tecnico` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `UsuarioFinal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Aseguradora" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Asistencia" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Ciudad" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Imagen" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Seguimiento" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Servicio" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tecnico" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "abrir_ticket",
DROP COLUMN "cerrar_ticket",
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "UsuarioFinal" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Aseguradora" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "expediente" VARCHAR(20) NOT NULL,

    CONSTRAINT "Aseguradora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "aseguradoraId" INTEGER,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ciudad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "latitud" DOUBLE PRECISION,
    "longitud" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imagen" (
    "id" SERIAL NOT NULL,
    "checkin" TEXT,
    "solucion" TEXT,
    "checkout" TEXT,
    "firma_conformidad" TEXT,
    "ticketId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Imagen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seguimiento" (
    "id" SERIAL NOT NULL,
    "nombre_asesor_seguro" INTEGER NOT NULL,
    "detalles" TEXT NOT NULL,
    "fecha_seguimiento" TIMESTAMP(3) NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seguimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicio" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnico" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido_paterno" VARCHAR(50) NOT NULL,
    "apellido_materno" VARCHAR(50) NOT NULL,
    "calificacion" DECIMAL(2,1) NOT NULL DEFAULT 0.0,
    "telefono" VARCHAR(10) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "ciudadId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Tecnico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "num_expediente" INTEGER NOT NULL,
    "asistencia_vial" BOOLEAN NOT NULL,
    "servicioId" INTEGER NOT NULL,
    "fecha_llamada" TIMESTAMP(3) NOT NULL,
    "hora_llamada" TIMESTAMP(3) NOT NULL,
    "nombre_asesor_aseguradora" TEXT NOT NULL,
    "nombre_asesor_gpo_lias" TEXT NOT NULL,
    "usuarioFinalId" INTEGER,
    "titulo_ticket" TEXT NOT NULL,
    "asistenciaId" INTEGER NOT NULL,
    "aseguradoraId" INTEGER NOT NULL,
    "problematica" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "colonia" TEXT NOT NULL,
    "calle" TEXT NOT NULL,
    "numero_domicilio" TEXT NOT NULL,
    "banderazo" MONEY,
    "total_salida" MONEY NOT NULL,
    "cobertura" TEXT NOT NULL,
    "cotizacion_gpo_lias" TEXT NOT NULL,
    "deducible" MONEY NOT NULL,
    "kilometraje" INTEGER NOT NULL,
    "total" MONEY NOT NULL,
    "anticipo" TEXT NOT NULL,
    "comentarios_cotizacion" TEXT NOT NULL,
    "tecnicoId" INTEGER NOT NULL,
    "solucion_tecnico" TEXT NOT NULL,
    "hora_contacto" TIMESTAMP(3) NOT NULL,
    "costo_materiales" MONEY NOT NULL,
    "costo_mano_obra" MONEY NOT NULL,
    "cotizacion_total_tecnico" VARCHAR(255) NOT NULL,
    "hora_cierre" TIMESTAMP(3) NOT NULL,
    "casetas" INTEGER NOT NULL,
    "costo_gpo_lias" MONEY NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL DEFAULT E'NUEVO',

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "usuario" VARCHAR(20) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "abrir_ticket" BOOLEAN,
    "cerrar_ticket" BOOLEAN,
    "inactivo" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "rol" TEXT NOT NULL DEFAULT E'USUARIO',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioFinal" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido_paterno" VARCHAR(50) NOT NULL,
    "apellido_materno" VARCHAR(50) NOT NULL,

    CONSTRAINT "UsuarioFinal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CiudadToTecnico" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ServicioToTecnico" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TicketToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aseguradora_id_key" ON "Aseguradora"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Asistencia_id_key" ON "Asistencia"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ciudad_id_key" ON "Ciudad"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Imagen_id_key" ON "Imagen"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Imagen_ticketId_key" ON "Imagen"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "Seguimiento_id_key" ON "Seguimiento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Servicio_id_key" ON "Servicio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnico_id_key" ON "Tecnico"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnico_usuarioId_key" ON "Tecnico"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_id_key" ON "Ticket"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_num_expediente_key" ON "Ticket"("num_expediente");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_key" ON "Usuario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuario_key" ON "Usuario"("usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioFinal_id_key" ON "UsuarioFinal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_CiudadToTecnico_AB_unique" ON "_CiudadToTecnico"("A", "B");

-- CreateIndex
CREATE INDEX "_CiudadToTecnico_B_index" ON "_CiudadToTecnico"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServicioToTecnico_AB_unique" ON "_ServicioToTecnico"("A", "B");

-- CreateIndex
CREATE INDEX "_ServicioToTecnico_B_index" ON "_ServicioToTecnico"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TicketToUsuario_AB_unique" ON "_TicketToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_TicketToUsuario_B_index" ON "_TicketToUsuario"("B");

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_aseguradoraId_fkey" FOREIGN KEY ("aseguradoraId") REFERENCES "Aseguradora"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguimiento" ADD CONSTRAINT "Seguimiento_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguimiento" ADD CONSTRAINT "Seguimiento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tecnico" ADD CONSTRAINT "Tecnico_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_aseguradoraId_fkey" FOREIGN KEY ("aseguradoraId") REFERENCES "Aseguradora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_asistenciaId_fkey" FOREIGN KEY ("asistenciaId") REFERENCES "Asistencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_tecnicoId_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "Tecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_usuarioFinalId_fkey" FOREIGN KEY ("usuarioFinalId") REFERENCES "UsuarioFinal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CiudadToTecnico" ADD FOREIGN KEY ("A") REFERENCES "Ciudad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CiudadToTecnico" ADD FOREIGN KEY ("B") REFERENCES "Tecnico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServicioToTecnico" ADD FOREIGN KEY ("A") REFERENCES "Servicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServicioToTecnico" ADD FOREIGN KEY ("B") REFERENCES "Tecnico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TicketToUsuario" ADD FOREIGN KEY ("A") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TicketToUsuario" ADD FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

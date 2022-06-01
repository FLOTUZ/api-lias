import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      usuario: 'admin',
      email: 'admin@mail.com',
      password: 'adminsupersecret',
      rol: 'ADMIN',
    },
  });

  //--------------ASEGURADORAS------------------

  await prisma.aseguradora.create({
    data: {
      nombre: 'IKE',
      telefono: '4510101012',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 16,
      costo_por_kilometro: 13,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'AXA',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 16,
    },
  });

  //--------------ASISTENCIAS------------------

  await prisma.asistencia.create({
    data: {
      nombre: 'Libra plus',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'Banamex',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'Engie Seguros',
      aseguradoraId: 2,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'Hogar Integral',
      aseguradoraId: 2,
    },
  });

  //--------------SERVICIOS------------------

  await prisma.servicio.create({
    data: {
      nombre: 'Plomeria',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Electricidad',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Grua',
      tipo: 'VIAL',
    },
  });
  await prisma.servicio.create({
    data: {
      nombre: 'Mecanico',
      tipo: 'VIAL',
    },
  });

  //--------------ESTADOS------------------

  await prisma.estado.create({
    data: {
      nombre: 'Michoacan',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'Jalisco',
    },
  });

  //--------------CIUDADES------------------
  await prisma.ciudad.create({
    data: {
      nombre: 'Morelia',
      latitud: 19.7008,
      longitud: -101.1895,
      estadoId: 1,
    },
  });

  await prisma.ciudad.create({
    data: {
      nombre: 'Uruapan',
      latitud: 19.7008,
      longitud: -101.1895,
      estadoId: 1,
    },
  });

  await prisma.ciudad.create({
    data: {
      nombre: 'Guadalajara',
      latitud: 19.7008,
      longitud: -101.1895,
      estadoId: 2,
    },
  });

  //--------------ASESOR------------------
  await prisma.asesor.create({
    data: {
      nombre: 'Juan',
      aseguradoraId: 1,
    },
  });

  //--------------TECNICO------------------

  await prisma.usuario.create({
    data: {
      usuario: 'santiago',
      email: 'santiago@mail.com',
      password: '=papaya papaya',
      inactivo: false,
      createdAt: '2022-05-30T05:08:29.996Z',
      updatedAt: '2022-05-30T05:08:29.996Z',
      rol: 'TECNICO',
    },
  });
  await prisma.tecnico.create({
    data: {
      nombre: 'Santiago',
      apellido_paterno: 'Solorzano',
      apellido_materno: 'Hernandez',
      calificacion: 0,
      telefono: '4433110399',
      usuarioId: 2,
      ciudadId: 1,
    },
  });

  //-----------------------TICKETS-------------------------------
  await prisma.ticket.create({
    data: {
      num_expediente: '201410241',
      asistencia_vial: true,
      fecha_llamada: '2022-05-28T02:30:00.000Z',
      nombre_asesor_gpo_lias: 'Aleejandro',
      nombre_usuario_final: 'Patricio',
      titulo_ticket: 'Auto barado en carretera',
      aseguradoraId: 2,
      asistenciaId: 4,
      asesorId: 1,
      problematica: 'auto barado en carretera por llanta pinchada',
      ciudadId: 1,
      colonia: 'Villas del real',
      calle: 'Juan ibarra',
      numero_domicilio: '13',
      banderazo: 100.10,
      total_salida: 100.12,
      costo_gpo_lias: 300,
      cobertura: 1000.31,
      cotizacion_gpo_lias: 'Sin informacion adicional',
      deducible: 41.4,
      kilometraje: 10,
      costo_de_kilometraje: 13,
      costo_por_caseta: 140.12,
      casetas: 2,
      total: 530.12,
      anticipo: 260.10,
      estado: 'NUEVO',
      num_interior: '',
      modelo_carro: '3',
      placas_carro: 'XYZ 234',
      color_carro: 'Rojo vino',
      marca_carro: 'Mazda',
      is_servicio_domestico: false,
      is_servicio_foraneo: false,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

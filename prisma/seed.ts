import { Aseguradora, PrismaClient } from '@prisma/client';

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
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'AXA',
      telefono: '918070055',
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

  //--------------CIUDADES------------------
  await prisma.ciudad.create({
    data: {
      nombre: 'Morelia',
      latitud: 19.7008,
      longitud: -101.1895,
    },
  });

  await prisma.ciudad.create({
    data: {
      nombre: 'Guadalajara',
      latitud: 19.7008,
      longitud: -101.1895,
    },
  });

  //-----------------------TICKETS-------------------------------
  await prisma.ticket.create({
    data: {
      num_expediente: '270986/303527',
      asistencia_vial: false,
      fecha_llamada: '2020-04-30T14:41:00.000Z',
      nombre_asesor_aseguradora: 'Maria Lopez',
      nombre_asesor_gpo_lias: 'Juan Vazquez',
      nombre_usuario_final: 'Michelle Patiño',
      titulo_ticket: 'HandyMan para montar una pantalla',
      aseguradoraId: 1,
      asistenciaId: 1,
      problematica: 'HandyMan para montar una pantalla de 72"',
      ciudad: 'Morelia',
      colonia: 'Vista Hermosa',
      calle: 'Miradores de la Sierra',
      numero_domicilio: '130',
      banderazo: 0,
      total_salida: 200,
      costo_gpo_lias: 130,
      cobertura: 1000,
      cotizacion_gpo_lias: 'Se requiere tambien de un soporte para pantalla',
      deducible: 0,
      kilometraje: 5,
      costo_de_kilometraje: 13,
      costo_por_caseta: 200,
      casetas: 0,
      total: 300,
      anticipo: 150,
      estado: 'NUEVO',
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

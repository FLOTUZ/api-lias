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
      expediente: '270986/303526',
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'AXA',
      telefono: '918070055',
      expediente: '1122114396',
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

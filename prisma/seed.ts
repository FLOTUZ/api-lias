import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      usuario: 'admin',
      email: 'admin@mail.com',
      inactivo: false,
      password:
        '$argon2i$v=19$m=4096,t=3,p=1$rTFe/GwrT+IkSGHGBDUHkA$Fabf40xbHmdnmk8VI2G7cjuKmKtiRlKKDYQu9q2Uc0U',
      rol: 'ADMIN',
    },
  });

  await prisma.usuario.create({
    data: {
      usuario: 'licluis',
      email: 'luis_avila@gmail.com',
      password:
        '$argon2i$v=19$m=4096,t=3,p=1$eB29CBcoKOVEJvp17CzxWA$g3asQ4U0zxJT8qGGkAVLHiw5qf2E2c8i2fBm3AF1Zso',
      inactivo: false,
      rol: 'ADMIN',
    },
  });

  await prisma.usuario.create({
    data: {
      usuario: 'jaquelyne',
      email: 'jaquelyne@gmail.com',
      password:
        '$argon2i$v=19$m=4096,t=3,p=1$kps94dQ7dtJXgGTYVEwo2A$ISamlPr+q8Jkyw0UXWFy1ISQkA5F8Ae7d9D9zbtXmQI',
      inactivo: false,
      rol: 'CAPTURISTA',
      hashedRt: null,
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
      costo_por_kilometro_foraneo: 13,
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
      costo_por_kilometro: 0,
      costo_por_kilometro_foraneo: 13,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'MEXICO ASISTENCIA',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 7,
      costo_por_kilometro_foraneo: 13.17,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'TELEMEDIC',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 8,
      costo_por_kilometro_foraneo: 13,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'ADDIUVA',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 16,
      costo_por_kilometro_foraneo: 0,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'CLUB DE ASISTENCIA',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 0,
      costo_por_kilometro_foraneo: 10,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'IGS',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 0,
      costo_por_kilometro_foraneo: 0,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'MAS SERVICIOS',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 0,
      costo_por_kilometro_foraneo: 7.5,
    },
  });

  await prisma.aseguradora.create({
    data: {
      nombre: 'SPV',
      telefono: '918070055',
      telefono_domestico: '4510101012',
      telefono_vial: '4510101012',
      telefono_whats: '4510101012',
      kilometraje_permitido: 18,
      costo_por_kilometro: 0,
      costo_por_kilometro_foraneo: 12.75,
    },
  });

  //--------------ASISTENCIAS------------------

  await prisma.asistencia.create({
    data: {
      nombre: 'LIBRA PLUS',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'BANAMEX',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'BANORTE',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'ABBA',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'NIETO',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'GNP VERSATIL',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'HSBC',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'HDI',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'NISSAN',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'ZURICH',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'MERCEDES BENZ',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'AFIRME',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'RENAULT',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'PEUGEOT',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'GM',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'ADP RESIDENCIAL',
      aseguradoraId: 1,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'ENGIE SEGUROS',
      aseguradoraId: 2,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'HOGAR INTEGRAL',
      aseguradoraId: 2,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'FORD',
      aseguradoraId: 2,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'VW',
      aseguradoraId: 2,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'NATURGY',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'CHUBB SEGUROS',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'MAPFRE SEGUROS',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'SCOTIABANK',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'HSBC',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'BANORTE HOGAR',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'KIA VW',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'MERCEDES BENZ',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'GNP',
      aseguradoraId: 3,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'BBVA',
      aseguradoraId: 4,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'SANTANDER',
      aseguradoraId: 4,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'CARE VOLARIS',
      aseguradoraId: 4,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'COPPEL',
      aseguradoraId: 4,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'ZURICH',
      aseguradoraId: 4,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'SUBURBIA',
      aseguradoraId: 6,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'LIVERPOOL',
      aseguradoraId: 6,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'WOW',
      aseguradoraId: 6,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'HDI',
      aseguradoraId: 6,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'COPPEL',
      aseguradoraId: 6,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'PALACIO',
      aseguradoraId: 7,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'BANORTE',
      aseguradoraId: 7,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'EL POTOSI',
      aseguradoraId: 8,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'AL AGUILA',
      aseguradoraId: 8,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'ANA SEGUROS',
      aseguradoraId: 8,
    },
  });

  await prisma.asistencia.create({
    data: {
      nombre: 'GNP',
      aseguradoraId: 9,
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

  await prisma.servicio.create({
    data: {
      nombre: 'Vidrio',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Aluminio',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Cerrajería',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Pintura',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Impermeabilización',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Albañilería',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Carpintería',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'Aire Acondicionado',
      tipo: 'DOMESTICO',
    },
  });

  await prisma.servicio.create({
    data: {
      nombre: 'HANDY-MAN',
      tipo: 'DOMESTICO',
    },
  });

  //--------------ESTADOS------------------

  await prisma.estado.create({
    data: {
      nombre: 'MICHOACÁN',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'JALISCO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'AGUASCALIENTES',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'BAJA CALIFORNIA NORTE',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'BAJA CALIFORNIA SUR',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'CAMPECHE',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'CHIAPAS',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'CHIHUAHUA',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'COLIMA',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'DURANGO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'ESTADO DE MÉXICO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'GUANAJUATO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'GUERRERO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'HIDALGO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'MORELOS',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'NUEVO LEÓN',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'PUEBLA',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'QUERÉTARO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'QUINTANA ROO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'SAN LUIS POTOSÍ',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'SINALOA',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'SONORA',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'TABASCO',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'TAMAULIPAS',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'VERACRUZ',
    },
  });

  await prisma.estado.create({
    data: {
      nombre: 'ZACATECAS',
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
  await prisma.asesor.create({
    data: {
      nombre: 'Maria',
      aseguradoraId: 4,
    },
  });
  await prisma.asesor.create({
    data: {
      nombre: 'Ana Juarez',
      aseguradoraId: 2,
    },
  });
  await prisma.asesor.create({
    data: {
      nombre: 'Eloisa',
      aseguradoraId: 1,
    },
  });

  //--------------TECNICO------------------

  await prisma.usuario.create({
    data: {
      usuario: 'emmanuel',
      email: 'emmanuel@mail.com',
      password:
        '$argon2i$v=19$m=4096,t=3,p=1$oEeQ0Y4CA5tpQAJoRUzM+g$s68618qhpkV76r/18xwlu1ji9iu5aHpnoPSjjDfKpKo',
      inactivo: false,
      rol: 'TECNICO',
      hashedRt: null,
    },
  });

  await prisma.tecnico.create({
    data: {
      nombre: 'Emmanuel',
      apellido_paterno: 'Esquivel',
      apellido_materno: 'Pardo',
      calificacion: 0,
      telefono: '4433110399',
      usuarioId: 4,
      ciudadId: 1,
    },
  });

  await prisma.tecnico.update({
    where: {
      id: 1,
    },
    data: {
      ciudadId: 1,
      Servicio: {
        connect: [3, 4].map((id) => ({ id: Number(id) })),
      },
    },
  });

  await prisma.usuario.create({
    data: {
      usuario: 'jose',
      email: 'jose@mail.com',
      password:
        '$argon2i$v=19$m=4096,t=3,p=1$qouxPiS06Hb4T6BXyEdOqA$ckCISFqrmaKhhAaKf5takyIwSsIeIE4o0iIJUpvQLh0',
      inactivo: false,
      createdAt: '2022-06-15T16:42:42.415Z',
      updatedAt: '2022-06-15T16:50:09.517Z',
      rol: 'TECNICO',
    },
  });

  await prisma.tecnico.create({
    data: {
      nombre: 'Jose',
      apellido_paterno: 'Lopez',
      apellido_materno: 'Mancilla',
      calificacion: 0,
      telefono: '4433110399',
      usuarioId: 5,
      ciudadId: 3,
    },
  });

  await prisma.tecnico.update({
    where: {
      id: 2,
    },
    data: {
      ciudadId: 2,
      Servicio: {
        connect: [1, 5].map((id) => ({ id: Number(id) })),
      },
    },
  });

  //-----------------------Usuarios Finales-------------------------------

  await prisma.usuarioFinal.create({
    data: {
      nombre: 'Maria',
      apellido_paterno: 'Dolores',
      apellido_materno: 'Morales',
      correo: 'mam@mail.com',
      telefono: '4433113099',
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
      colonia: '',
      calle: '19.731813, -101.200281',
      numero_domicilio: '0',
      banderazo: 100.1,
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
      anticipo: 260.1,
      estado: 'NUEVO',
      num_interior: '',
      modelo_carro: '3',
      placas_carro: 'XYZ 234',
      color_carro: 'Rojo vino',
      marca_carro: 'Mazda',
      is_servicio_domestico: false,
      is_servicio_foraneo: false,
      Servicio: {
        connect: [3, 4].map((id) => ({ id: Number(id) })),
      },
    },
  });
  await prisma.ticket.create({
    data: {
      num_expediente: 'p1200301',
      asistencia_vial: false,
      fecha_llamada: '2022-06-16T04:59:00.000Z',
      nombre_asesor_gpo_lias: 'Emmanuel',
      asesorId: 1,
      nombre_usuario_final: 'Abril Jasive Zamora Estrada',
      titulo_ticket: 'Llave de puerta principal quebrada',
      asistenciaId: 2,
      aseguradoraId: 1,
      problematica: 'La usuaria Abril se quedo afuera de su casa',
      ciudadId: 1,
      colonia: 'Vasco de Quiroga',
      calle: 'Carpinteros de Paracho LB',
      numero_domicilio: '157',
      banderazo: 0,
      total_salida: 100,
      cobertura: 1000,
      cotizacion_gpo_lias: 'La casa está al lado del auto lavado',
      deducible: 0,
      kilometraje: 10,
      costo_de_kilometraje: 10,
      costo_por_caseta: 0,
      total: 300,
      anticipo: 180,
      hora_cierre: null,
      casetas: 0,
      costo_gpo_lias: 200,
      estado: 'NUEVO',
      num_interior: '',
      modelo_carro: '',
      placas_carro: '',
      color_carro: '',
      marca_carro: '',
      is_servicio_domestico: true,
      is_servicio_foraneo: false,
      Servicio: {
        connect: [7].map((id) => ({ id: Number(id) })),
      },
    },
  });
  await prisma.ticket.create({
    data: {
      num_expediente: 'A1245321',
      asistencia_vial: false,
      fecha_llamada: '2022-06-16T05:10:00.000Z',
      nombre_asesor_gpo_lias: 'Miguel Angel Solorzano',
      asesorId: 1,
      nombre_usuario_final: 'Regina Lomelí',
      titulo_ticket: 'Ventana rota Regina',
      asistenciaId: 1,
      aseguradoraId: 1,
      problematica: 'reemplazo de ventana rota',
      ciudadId: 1,
      colonia: 'Sin Nombre',
      calle: 'Cam. de La Arboleda',
      numero_domicilio: '8',
      banderazo: 0,
      total_salida: 356,
      cobertura: 1000,
      cotizacion_gpo_lias: 'Tecnologico de morelia campus 2',
      deducible: 0,
      kilometraje: 12,
      costo_de_kilometraje: 13,
      costo_por_caseta: 200,
      total: 556,
      anticipo: 213.6,
      hora_cierre: null,
      casetas: 1,
      costo_gpo_lias: 200,
      estado: 'NUEVO',
      num_interior: '',
      modelo_carro: '',
      placas_carro: '',
      color_carro: '',
      marca_carro: '',
      is_servicio_domestico: true,
      is_servicio_foraneo: true,
      tecnicoId: null,
      Servicio: {
        connect: [5, 6].map((id) => ({ id: Number(id) })),
      },
    },
  });
  await prisma.ticket.create({
    data: {
      num_expediente: '11141241a-211',
      asistencia_vial: true,
      fecha_llamada: '2022-06-16T05:48:00.000Z',
      nombre_asesor_gpo_lias: 'Emmanuel',
      asesorId: 4,
      nombre_usuario_final: 'Isla Solorzano',
      titulo_ticket:
        '20lts de gasolina para Isla 20lts de gasolina',
      asistenciaId: 2,
      aseguradoraId: 1,
      problematica: 'Llevar 20 lts de gasolina a usuaria',
      ciudadId: 1,
      colonia: '',
      calle: '19.7033025,-101.1916141',
      numero_domicilio: '',
      banderazo: 100,
      total_salida: 510,
      cobertura: 1000,
      cotizacion_gpo_lias: 'El cliente necesita el servicio urgentemente',
      deducible: 400,
      kilometraje: 20,
      costo_de_kilometraje: 20,
      costo_por_caseta: 10,
      total: 2010,
      anticipo: 900,
      hora_cierre: null,
      casetas: 1,
      costo_gpo_lias: 1000,
      estado: 'NUEVO',
      num_interior: '',
      modelo_carro: ' BMW M340i xDrive Sedán 2023',
      placas_carro: 'WLU 94 69',
      color_carro: 'Negro',
      marca_carro: 'Mazda',
      is_servicio_domestico: false,
      is_servicio_foraneo: true,
      tecnicoId: null,
      Servicio: {
        connect: [3, 4, 13].map((id) => ({ id: Number(id) })),
      },
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

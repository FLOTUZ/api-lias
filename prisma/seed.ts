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
      costo_por_kilometro: 0,
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
      costo_por_kilometro: 16,
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
      costo_por_kilometro: 7.50,
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
      costo_por_kilometro: 12.75,
    },  });

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
      colonia: 'Villas del real',
      calle: 'Juan ibarra',
      numero_domicilio: '13',
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

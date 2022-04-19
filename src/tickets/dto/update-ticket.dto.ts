import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @ApiProperty({})
  num_expediente: number;

  @ApiProperty({})
  asistencia_vial: boolean;

  @ApiProperty({ required: true })
  servicioId: number;

  @ApiProperty({})
  fecha_llamada: Date;

  @ApiProperty({})
  hora_llamada: Date;

  @ApiProperty({})
  nombre_asesor_aseguradora: string;

  @ApiProperty({})
  nombre_asesor_gpo_lias: string;

  @ApiProperty({ required: true })
  usuarioFinalId: number | null;

  @ApiProperty({})
  titulo_ticket: string;

  @ApiProperty({ required: true })
  asistenciaId: number;

  @ApiProperty({ required: true })
  aseguradoraId: number;

  @ApiProperty({})
  problematica: string;

  @ApiProperty({})
  ciudad: string;

  @ApiProperty({})
  colonia: string;

  @ApiProperty({})
  calle: string;

  @ApiProperty({})
  numero_domicilio: string;

  @ApiProperty({ type: 'number' })
  banderazo: Decimal;

  @ApiProperty({ type: 'number' })
  total_salida: Decimal;

  @ApiProperty({})
  cobertura: string;

  @ApiProperty({})
  cotizacion_gpo_lias: string;

  @ApiProperty({ type: 'number' })
  deducible: Decimal;

  @ApiProperty({})
  kilometraje: number;

  @ApiProperty({ type: 'number' })
  total: Decimal;

  @ApiProperty({})
  anticipo: string;

  @ApiProperty({})
  comentarios_cotizacion: string;

  @ApiProperty({ required: true })
  tecnicoId: number;

  @ApiProperty({})
  solucion_tecnico: string;

  @ApiProperty({})
  hora_contacto: Date;

  @ApiProperty({ type: 'number' })
  costo_materiales: Decimal;

  @ApiProperty({ type: 'number' })
  costo_mano_obra: Decimal;

  @ApiProperty({})
  cotizacion_total_tecnico: string;

  @ApiProperty({})
  hora_cierre: Date;

  @ApiProperty({})
  casetas: number;

  @ApiProperty({ type: 'number' })
  costo_gpo_lias: Decimal;

  @ApiProperty({ enum: ['NUEVO', 'PENDIENTE', 'EN PROCESO', 'CERRADO'] })
  estado: string;
}

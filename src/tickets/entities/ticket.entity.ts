import { ApiProperty } from '@nestjs/swagger';
import { Ticket } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class TicketEntity implements Ticket {
  @ApiProperty()
  id: number;

  @ApiProperty()
  num_expediente: string;

  @ApiProperty()
  asistencia_vial: boolean;

  @ApiProperty()
  servicioId: number;

  @ApiProperty()
  fecha_llamada: Date;

  @ApiProperty()
  hora_llamada: Date;

  @ApiProperty()
  nombre_asesor_aseguradora: string;

  @ApiProperty()
  nombre_asesor_gpo_lias: string;

  @ApiProperty()
  titulo_ticket: string;

  @ApiProperty()
  asistenciaId: number;

  @ApiProperty()
  aseguradoraId: number;

  @ApiProperty()
  problematica: string;

  @ApiProperty()
  ciudad: string;

  @ApiProperty()
  colonia: string;

  @ApiProperty()
  calle: string;

  @ApiProperty()
  numero_domicilio: string;

  @ApiProperty({ type: 'number' })
  banderazo: Decimal;

  @ApiProperty({ type: 'number' })
  total_salida: Decimal;

  @ApiProperty()
  cobertura: string;

  @ApiProperty()
  cotizacion_gpo_lias: string;

  @ApiProperty({ type: 'number' })
  deducible: Decimal;

  @ApiProperty()
  kilometraje: number;

  @ApiProperty({ type: 'number' })
  total: Decimal;

  @ApiProperty()
  anticipo: string;

  @ApiProperty()
  comentarios_cotizacion: string;

  @ApiProperty()
  hora_cierre: Date;

  @ApiProperty()
  casetas: number;

  @ApiProperty({ type: 'number' })
  costo_gpo_lias: Decimal;

  @ApiProperty()
  estado: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

}

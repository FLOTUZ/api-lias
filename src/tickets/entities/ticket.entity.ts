import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Ticket } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';

export class TicketEntity implements Ticket {
  @ApiProperty()
  id: number;

  @ApiProperty()
  num_expediente: string;

  @ApiProperty()
  asistencia_vial: boolean;

  @ApiProperty()
  fecha_llamada: Date;

  @ApiProperty({ type: 'number' })
  asesorId: number;

  @ApiProperty()
  nombre_asesor_gpo_lias: string;

  @ApiProperty()
  nombre_usuario_final: string;

  @ApiProperty()
  titulo_ticket: string;

  @ApiProperty()
  asistenciaId: number;

  @ApiProperty()
  aseguradoraId: number;

  @ApiProperty()
  problematica: string;

  @ApiProperty()
  ciudadId: number;

  @ApiProperty()
  colonia: string;

  @ApiProperty()
  calle: string;

  @ApiProperty()
  numero_domicilio: string;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  banderazo: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  total_salida: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  cobertura: Decimal;

  @ApiProperty()
  cotizacion_gpo_lias: string;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  deducible: Decimal;

  @ApiProperty()
  kilometraje: number;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  costo_de_kilometraje: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  costo_por_caseta: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  total: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  anticipo: Decimal;

  @ApiProperty()
  hora_cierre: Date;

  @ApiProperty()
  casetas: number;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  costo_gpo_lias: Decimal;

  @ApiProperty()
  estado: string;

  @ApiProperty({ required: false })
  num_interior: string;

  @ApiProperty({ required: false })
  modelo_carro: string;

  @ApiProperty({ required: false })
  placas_carro: string;

  @ApiProperty({ required: false })
  color_carro: string;

  @ApiProperty({ required: false })
  marca_carro: string;

  @ApiProperty({ required: false })
  is_servicio_domestico: boolean;

  @ApiProperty({ required: false })
  is_servicio_foraneo: boolean;

  @ApiProperty({ required: false })
  tecnicoId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<TicketEntity | NotFoundException>) {
    Object.assign(this, partial);
  }
}

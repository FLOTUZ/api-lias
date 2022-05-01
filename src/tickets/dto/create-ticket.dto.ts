import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export enum EstadoTicket {
  'NUEVO' = 'NUEVO',
  'PENDIENTE' = 'PENDIENTE',
  'EN PROCESO' = 'EN PROCESO',
  'CERRADO' = 'CERRADO',
}

export class CreateTicketDto {
  @ApiProperty()
  @IsNotEmpty()
  num_expediente: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: true })
  asistencia_vial: boolean;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  servicioId: number;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  fecha_llamada: Date;

  @IsNotEmpty()
  @ApiProperty()
  nombre_asesor_aseguradora: string;

  @IsNotEmpty()
  @ApiProperty()
  nombre_asesor_gpo_lias: string;

  @IsNotEmpty()
  @ApiProperty()
  nombre_usuario_final: string;

  @IsNotEmpty()
  @ApiProperty({})
  titulo_ticket: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  asistenciaId: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  aseguradoraId: number;

  @IsNotEmpty()
  @ApiProperty()
  problematica: string;

  @IsNotEmpty()
  @ApiProperty()
  ciudad: string;

  @IsNotEmpty()
  @ApiProperty()
  colonia: string;

  @IsNotEmpty()
  @ApiProperty()
  calle: string;

  @IsNotEmpty()
  @ApiProperty()
  numero_domicilio: string;

  @IsOptional()
  @ApiProperty({ type: 'number', required: false })
  banderazo: Decimal;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  total_salida: Decimal;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  cobertura: Decimal;

  @IsOptional()
  @ApiProperty()
  cotizacion_gpo_lias: string;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  deducible: Decimal;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  kilometraje: number;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  total: Decimal;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  anticipo: Decimal;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  casetas: number;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  costo_gpo_lias: Decimal;

  @IsNotEmpty()
  @IsEnum(EstadoTicket)
  @ApiProperty({
    enum: ['NUEVO', 'PENDIENTE', 'EN PROCESO', 'CERRADO'],
    default: 'NUEVO',
  })
  estado: string;

  @IsOptional()
  @ApiProperty()
  hora_cierre: Date;
}

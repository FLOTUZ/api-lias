import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
} from 'class-validator';

export enum EstadoTicket {
  'NUEVO' = 'NUEVO',
  'TOMADO' = 'TOMADO',
  'COTIZADO' = 'COTIZADO',
  'EN PROCESO' = 'EN PROCESO',
  'A CERRAR' = 'A CERRAR',
  'FINALIZADO' = 'FINALIZADO',
}

export class CreateTicketDto {
  @ApiProperty()
  @IsNotEmpty()
  num_expediente: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: true })
  asistencia_vial: boolean;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  fecha_llamada: Date;

  @IsNotEmpty()
  @ApiProperty()
  nombre_asesor_gpo_lias: string;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  asesorId: number;

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

  @IsOptional()
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

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  kilometraje: number;

  @IsOptional()
  @ApiProperty({ type: 'number' })
  costo_de_kilometraje: Decimal;

  @IsOptional()
  @ApiProperty({ type: 'number' })
  costo_por_caseta: Decimal;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  total: Decimal;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  anticipo: Decimal;

  @IsOptional()
  @ApiProperty()
  casetas: number;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  costo_gpo_lias: Decimal;

  @IsNotEmpty()
  @IsEnum(EstadoTicket)
  @ApiProperty({
    enum: [
      'NUEVO',
      'TOMADO',
      'COTIZADO',
      'EN PROCESO',
      'A CERRAR',
      'FINALIZADO',
    ],
    default: 'NUEVO',
  })
  estado: string;

  @IsOptional()
  @ApiProperty()
  hora_cierre: Date;

  @IsOptional()
  @MaxLength(5)
  @ApiProperty({ required: false })
  num_interior: string;

  @IsOptional()
  @MaxLength(50)
  @ApiProperty({ required: false })
  modelo_carro: string;

  @IsOptional()
  @MaxLength(10)
  @ApiProperty({ required: false })
  placas_carro: string;

  @IsOptional()
  @MaxLength(50)
  @ApiProperty({ required: false })
  color_carro: string;

  @IsOptional()
  @MaxLength(50)
  @ApiProperty({ required: false })
  marca_carro: string;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  is_servicio_domestico: boolean;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  is_servicio_foraneo: boolean;
}

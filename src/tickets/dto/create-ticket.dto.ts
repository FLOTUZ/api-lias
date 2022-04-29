import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

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

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  fecha_llamada: Date;

  @IsNotEmpty()
  @ApiProperty()
  hora_llamada: Date;

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
  @IsDecimal()
  @ApiProperty({ type: 'number', required: false })
  banderazo: Decimal;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty({ type: 'number' })
  total_salida: Decimal;

  @IsNotEmpty()
  @ApiProperty()
  cobertura: string;

  @IsNotEmpty()
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
  @IsDecimal()
  @ApiProperty({ type: 'number' })
  total: Decimal;

  @IsNotEmpty()
  @ApiProperty()
  anticipo: string;

  @IsOptional()
  @ApiProperty()
  @ApiProperty({ required: false })
  comentarios_cotizacion: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  casetas: number;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty({ type: 'number' })
  costo_gpo_lias: Decimal;

  @IsNotEmpty()
  @IsEnum({ enum: ['NUEVO', 'PENDIENTE', 'EN PROCESO', 'CERRADO'] })
  @ApiProperty({
    enum: ['NUEVO', 'PENDIENTE', 'EN PROCESO', 'CERRADO'],
    default: 'NUEVO',
  })
  estado: string;

  @IsOptional()
  @ApiProperty()
  hora_cierre: Date;
}

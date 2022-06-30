import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

import { IsDateString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCotizacionTecnicoDto {
  @IsNotEmpty()
  @ApiProperty()
  diagnostico_problema: string;

  @IsNotEmpty()
  @ApiProperty()
  solucion_tecnico: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: Date })
  fecha_contacto: Date;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  costo_mano_obra: Decimal;

  @IsNotEmpty()
  @ApiProperty({ type: 'number', required: false })
  costo_materiales: Decimal;

  @IsNotEmpty()
  @ApiProperty({ type: 'number' })
  total_cotizacion: Decimal;

  @ApiProperty()
  @IsNotEmpty()
  ticketId: number;

  @ApiProperty()
  @IsNotEmpty()
  tecnicoId: number;

  @ApiProperty()
  @IsOptional()
  preSolucionId: number;

  @ApiProperty()
  @IsOptional()
  is_aprobado: boolean;

  @ApiProperty()
  @IsOptional()
  aprobado_por_usuarioId: number;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  hora_llegada: Date;

  @ApiProperty()
  @IsNotEmpty()
  img_llegadaId: number;

  @ApiProperty()
  @IsOptional()
  img_placasId: number;
}

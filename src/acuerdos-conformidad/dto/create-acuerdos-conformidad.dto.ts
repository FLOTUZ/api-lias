import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAcuerdosConformidadDto {
  @IsNotEmpty()
  @ApiProperty()
  fecha_acuerdo: Date;

  @IsNotEmpty()
  @ApiProperty()
  descripcion_problema: string;

  @ApiProperty()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty()
  @IsOptional()
  observaciones: string;

  @IsNotEmpty()
  @ApiProperty()
  actividades_realizadas: string;

  @IsNotEmpty()
  @ApiProperty()
  hora_recepcion_servicio: Date;

  @IsNotEmpty()
  @ApiProperty()
  hora_llegada_servicio: Date;

  @IsNotEmpty()
  @ApiProperty()
  hora_finalizacion_servicio: Date;

  @IsOptional()
  @ApiProperty({ required: false })
  acuerdo_firmado: string;

  @IsOptional()
  @ApiProperty({ default: false, required: false })
  is_aprobado: boolean;

  @IsNotEmpty()
  @ApiProperty()
  ticketId: number;

  @IsOptional()
  @ApiProperty({ required: false })
  usuarioFinalId: number;

  @IsOptional()
  @ApiProperty({ required: false })
  img_solucionId: number;

  @IsOptional()
  @ApiProperty({ required: false })
  aprobado_por_usuarioId: number;
}

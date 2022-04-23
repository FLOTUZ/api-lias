import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAcuerdosConformidadDto {
  @IsNotEmpty()
  @ApiProperty()
  expediente: string;

  @IsNotEmpty()
  @ApiProperty()
  fecha_acuerdo: Date;

  @IsNotEmpty()
  @ApiProperty()
  problema: string;

  @IsNotEmpty()
  @ApiProperty()
  asistencia: string;

  @IsNotEmpty()
  @ApiProperty()
  nombre_asesor: string;

  @IsNotEmpty()
  @ApiProperty()
  descripcion_problema: string;

  @ApiProperty()
  @IsNotEmpty()
  direccion: string;

  @IsNotEmpty()
  @ApiProperty()
  usuario_final: string;

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
}

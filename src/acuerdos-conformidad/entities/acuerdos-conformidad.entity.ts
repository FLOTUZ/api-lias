import { ApiProperty } from '@nestjs/swagger';
import { AcuerdoConformidad } from '@prisma/client';

export class AcuerdoConformidadEntity implements AcuerdoConformidad {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty()
  expediente: string;

  @ApiProperty()
  fecha_acuerdo: Date;

  @ApiProperty()
  problema: string;

  @ApiProperty()
  asistencia: string;

  @ApiProperty()
  nombre_asesor: string;

  @ApiProperty()
  descripcion_problema: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  usuario_final: string;

  @ApiProperty()
  hora_recepcion_servicio: Date;

  @ApiProperty()
  hora_llegada_servicio: Date;

  @ApiProperty()
  hora_finalizacion_servicio: Date;

  @ApiProperty({ required: false })
  acuerdo_firmado: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
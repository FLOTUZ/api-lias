import { ConflictException, NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AcuerdoConformidad } from '@prisma/client';

export class AcuerdoConformidadEntity implements AcuerdoConformidad {
  @ApiProperty({ required: false })
  id: number;

  @ApiProperty()
  fecha_acuerdo: Date;

  @ApiProperty()
  problema: string;

  @ApiProperty()
  descripcion_problema: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  observaciones: string;

  @ApiProperty()
  actividades_realizadas: string;

  @ApiProperty()
  hora_recepcion_servicio: Date;

  @ApiProperty()
  hora_llegada_servicio: Date;

  @ApiProperty()
  hora_finalizacion_servicio: Date;

  @ApiProperty({ required: false })
  acuerdo_firmado: string;

  @ApiProperty({ default: false, required: false })
  is_aprobado: boolean;

  @ApiProperty({ required: false })
  usuarioFinalId: number;

  @ApiProperty({ required: false })
  img_solucionId: number;

  @ApiProperty({ required: false })
  aprobado_por_usuarioId: number;

  @ApiProperty()
  ticketId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<AcuerdoConformidadEntity | NotFoundException | ConflictException>) {
    Object.assign(this, partial);
  }
}

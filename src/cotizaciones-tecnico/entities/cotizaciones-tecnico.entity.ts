import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CotizacionTecnico } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';

export class CotizacionTecnicoEntity implements CotizacionTecnico {
  @ApiProperty()
  id: number;

  @ApiProperty()
  diagnostico_problema: string;

  @ApiProperty()
  solucion_tecnico: string;

  @ApiProperty()
  fecha_contacto: Date;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  costo_mano_obra: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  costo_materiales: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  total_cotizacion: Decimal;

  @ApiProperty()
  ticketId: number;

  @ApiProperty()
  tecnicoId: number;

  @ApiProperty({ required: false })
  preSolucionId: number;

  @ApiProperty()
  is_aprobado: boolean;

  @ApiProperty()
  aprobado_por_usuarioId: number;

  @ApiProperty({ required: false })
  img_llegadaId: number;

  @ApiProperty({ required: false })
  img_placasId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<CotizacionTecnicoEntity | NotFoundException>) {
    Object.assign(this, partial);
  }
}

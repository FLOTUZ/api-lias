import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CotizacionTecnico } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';

export class CotizacionesTecnicoEntity implements CotizacionTecnico {
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

  @ApiProperty()
  preSolucionId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<CotizacionesTecnicoEntity | NotFoundException>) {
    Object.assign(this, partial);
  }
}

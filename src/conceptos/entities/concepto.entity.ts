import { ConflictException, NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Concepto } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';

export class ConceptoEntity implements Concepto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty({ type: Number })
  @Type(() => Number)
  costo_mano_obra: Decimal;

  @ApiProperty()
  tipo_conceptoId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(
    partial: Partial<ConceptoEntity | NotFoundException | ConflictException>,
  ) {
    Object.assign(this, partial);
  }
}

import { ConflictException, NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { TipoConcepto } from '@prisma/client';

export class TipoDeConceptoEntity implements TipoConcepto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  servicioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(
    partial: Partial<
      TipoDeConceptoEntity | NotFoundException | ConflictException
    >,
  ) {
    Object.assign(this, partial);
  }
}

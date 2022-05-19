import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Tecnico } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';

export class TecnicoEntity implements Tecnico {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido_paterno: string;

  @ApiProperty()
  apellido_materno: string;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  calificacion: Decimal;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  ciudadId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<TecnicoEntity | NotFoundException>) {
    Object.assign(this, partial);
  }
}

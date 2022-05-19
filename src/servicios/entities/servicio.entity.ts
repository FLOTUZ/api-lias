import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Servicio, Tecnico } from '@prisma/client';

export class ServicioEntity implements Servicio {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  tipo: string;

  constructor(
    partial: Partial<
      ServicioEntity | NotFoundException | (Servicio & { Tecnico: Tecnico[] })[]
    >,
  ) {
    Object.assign(this, partial);
  }
}

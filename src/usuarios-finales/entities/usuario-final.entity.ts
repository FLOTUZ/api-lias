import { ConflictException, NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { UsuarioFinal } from '@prisma/client';

export class UsuarioFinalEntity implements UsuarioFinal {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido_paterno: string;

  @ApiProperty()
  apellido_materno: string;

  @ApiProperty({ required: false })
  createdAt: Date;

  @ApiProperty({ required: false })
  correo: string;

  @ApiProperty({ required: false })
  telefono: string;

  @ApiProperty({ required: false })
  updatedAt: Date;

  constructor(partial: Partial<UsuarioFinalEntity | NotFoundException | ConflictException>) {
    Object.assign(this, partial);
  }
}

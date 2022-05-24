import { NotFoundException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Imagen } from '@prisma/client';

export class ImagenEntity implements Imagen {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<ImagenEntity | NotFoundException>) {
    Object.assign(this, partial);
  }
}

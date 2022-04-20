import { ApiProperty } from '@nestjs/swagger';
import { Imagen } from '@prisma/client';

export class ImagenEntity implements Imagen {
  @ApiProperty()
  id: number;

  @ApiProperty()
  checkin: string;

  @ApiProperty()
  solucion: string;

  @ApiProperty()
  checkout: string;

  @ApiProperty()
  firma_conformidad: string;

  @ApiProperty()
  ticketId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

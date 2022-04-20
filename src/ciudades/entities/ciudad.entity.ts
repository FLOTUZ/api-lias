import { ApiProperty } from '@nestjs/swagger';
import { Ciudad } from '@prisma/client';

export class CiudadEntity implements Ciudad {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  latitud: number;

  @ApiProperty()
  longitud: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

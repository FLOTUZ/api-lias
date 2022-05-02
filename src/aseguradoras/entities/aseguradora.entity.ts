import { ApiProperty } from '@nestjs/swagger';
import { Aseguradora } from '@prisma/client';

export class AseguradoraEntity implements Aseguradora {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  expediente: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

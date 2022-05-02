import { ApiProperty } from '@nestjs/swagger';
import { Imagen } from '@prisma/client';

export class ImagenEntity implements Imagen {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty({ required: false })
  cotizacionTecnicoId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

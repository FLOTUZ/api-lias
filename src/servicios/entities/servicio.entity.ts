import { ApiProperty } from '@nestjs/swagger';
import { Servicio } from '@prisma/client';

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
}

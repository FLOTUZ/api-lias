import { ApiProperty } from '@nestjs/swagger';
import { Estado } from '@prisma/client';

export class EstadoEntity implements Estado {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

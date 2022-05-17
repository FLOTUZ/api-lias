import { ApiProperty } from '@nestjs/swagger';
import { Asesor } from '@prisma/client';

export class AsesorEntity implements Asesor {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  aseguradoraId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

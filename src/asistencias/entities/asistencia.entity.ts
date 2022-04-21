import { ApiProperty } from '@nestjs/swagger';
import { Asistencia } from '@prisma/client';

export class AsistenciaEntity implements Asistencia {
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

import { ApiProperty } from '@nestjs/swagger';
import { Tecnico } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class TecnicoEntity implements Tecnico {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido_paterno: string;

  @ApiProperty()
  apellido_materno: string;

  @ApiProperty({ type: 'number' })
  calificacion: Decimal;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  ciudadId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

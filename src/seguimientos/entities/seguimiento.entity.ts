import { ApiProperty } from '@nestjs/swagger';
import { Seguimiento } from '@prisma/client';

export class SeguimientoEntity implements Seguimiento {
  @ApiProperty()
  id: number;

  @ApiProperty()
  detalles: string;

  @ApiProperty()
  fecha_seguimiento: Date;

  @ApiProperty()
  ticketId: number;

  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  asesorId : number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

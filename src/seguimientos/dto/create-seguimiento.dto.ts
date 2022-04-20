import { ApiProperty } from '@nestjs/swagger';

export class CreateSeguimientoDto {
  @ApiProperty()
  nombre_asesor_seguro: string;

  @ApiProperty()
  detalles: string;

  @ApiProperty()
  fecha_seguimiento: Date;

  @ApiProperty()
  ticketId: number;

  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  createdAt: Date;
}

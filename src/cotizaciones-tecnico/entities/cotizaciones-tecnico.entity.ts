import { ApiProperty } from '@nestjs/swagger';
import { CotizacionTecnico } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class CotizacionesTecnicoEntity implements CotizacionTecnico {
  @ApiProperty()
  id: number;

  @ApiProperty()
  diagnostico_problema: string;

  @ApiProperty()
  solucion_tecnico: string;

  @ApiProperty({ type: 'number' })
  fecha_contacto: Date;

  @ApiProperty({ type: 'number' })
  costo_mano_obra: Decimal;

  @ApiProperty({ type: 'number' })
  costo_materiales: Decimal;

  @ApiProperty({ type: 'number' })
  total_cotizacion: Decimal;

  @ApiProperty()
  ticketId: number;

  @ApiProperty()
  tecnicoId: number;

  @ApiProperty()
  checkInId: number;

  @ApiProperty()
  preSolucionId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

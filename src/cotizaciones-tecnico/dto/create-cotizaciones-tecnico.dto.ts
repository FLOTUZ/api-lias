import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { IsDate, IsDecimal, IsNotEmpty } from 'class-validator';

export class CreateCotizacionTecnicoDto {
  @IsNotEmpty()
  @ApiProperty()
  diagnostico_problema: string;

  @IsNotEmpty()
  @ApiProperty()
  solucion_tecnico: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({ type: Date })
  fecha_contacto: Date;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty({ type: 'number' })
  costo_mano_obra: Decimal;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty({ type: 'number', required: false })
  costo_materiales: Decimal;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty({ type: 'number' })
  total_cotizacion: Decimal;

  @ApiProperty()
  @IsNotEmpty()
  ticketId: number;

  @ApiProperty()
  @IsNotEmpty()
  tecnicoId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSeguimientoDto {
  @IsNotEmpty()
  @ApiProperty()
  nombre_asesor_seguro: string;

  @IsNotEmpty()
  @ApiProperty()
  detalles: string;

  @IsNotEmpty()
  @ApiProperty()
  fecha_seguimiento: Date;

  @IsNotEmpty()
  @ApiProperty()
  ticketId: number;

  @IsNotEmpty()
  @ApiProperty()
  usuarioId: number;
}

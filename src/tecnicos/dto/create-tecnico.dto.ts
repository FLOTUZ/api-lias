import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

export class CreateTecnicoDto {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido_paterno: string;

  @ApiProperty()
  apellido_materno: string;

  @ApiProperty({ type: 'number', required: false })
  calificacion: Decimal;

  @ApiProperty()
  telefono: string;

  @ApiProperty({ required: true })
  usuarioId: number;

  @ApiProperty({ required: true })
  ciudadId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { UsuarioFinal } from '@prisma/client';

export class UsuarioFinalEntity implements UsuarioFinal {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido_paterno: string;

  @ApiProperty()
  apellido_materno: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuariosFinaleDto {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido_paterno: string;

  @ApiProperty()
  apellido_materno: string;
}

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuariosFinaleDto } from './create-usuarios-finale.dto';

export class UpdateUsuariosFinaleDto extends PartialType(
  CreateUsuariosFinaleDto,
) {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido_paterno: string;

  @ApiProperty()
  apellido_materno: string;
}

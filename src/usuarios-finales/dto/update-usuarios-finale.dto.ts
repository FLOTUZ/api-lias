import { PartialType } from '@nestjs/swagger';
import { CreateUsuariosFinaleDto } from './create-usuarios-finale.dto';

export class UpdateUsuariosFinaleDto extends PartialType(
  CreateUsuariosFinaleDto,
) {}

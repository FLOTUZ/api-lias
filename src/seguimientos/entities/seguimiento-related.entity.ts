import { ApiProperty } from '@nestjs/swagger';
import { AsesorEntity } from 'src/asesores/entities/asesore.entity';
import { UsuarioEntity } from 'src/users/entities/usuario.entity';
import { SeguimientoEntity } from './seguimiento.entity';

export class SeguimientoRelatedEntity extends SeguimientoEntity {
  @ApiProperty()
  Usuario: UsuarioEntity;

  @ApiProperty()
  Asesor: AsesorEntity;
}

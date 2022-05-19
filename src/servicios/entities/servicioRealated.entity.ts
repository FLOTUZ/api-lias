import { ApiProperty } from '@nestjs/swagger';
import { TecnicoEntity } from 'src/tecnicos/entities/tecnico.entity';
import { ServicioEntity } from './servicio.entity';

export class ServicioRelatedEntity extends ServicioEntity {
  @ApiProperty({ type: TecnicoEntity })
  Tecnico: TecnicoEntity;
}

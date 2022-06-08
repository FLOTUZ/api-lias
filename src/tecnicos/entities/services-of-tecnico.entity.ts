import { ApiProperty } from '@nestjs/swagger';
import { ServicioEntity } from 'src/servicios/entities/servicio.entity';
import { TecnicoEntity } from './tecnico.entity';

export class ServicesOfTecnicoEntity extends TecnicoEntity {
  @ApiProperty({ type: [ServicioEntity] })
  Servicio: [];
}

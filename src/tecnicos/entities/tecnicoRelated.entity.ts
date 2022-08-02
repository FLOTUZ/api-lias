import { ApiProperty } from '@nestjs/swagger';
import { CiudadEntity } from 'src/ciudades/entities/ciudad.entity';
import { ServicioEntity } from 'src/servicios/entities/servicio.entity';
import { TecnicoEntity } from './tecnico.entity';

export class TecnicoRelatedEntity extends TecnicoEntity {
  @ApiProperty({
    type: [ServicioEntity],
  })
  Servicio: ServicioEntity[];

  @ApiProperty({
    type: [CiudadEntity],
  })
  Ciudades_Cobertura: CiudadEntity[];

  @ApiProperty({
    type: CiudadEntity,
  })
  ViveEn: CiudadEntity;
}

import { ApiProperty } from '@nestjs/swagger';
import { CiudadEntity } from 'src/ciudades/entities/ciudad.entity';
import { CotizacionesTecnicoEntity } from 'src/cotizaciones-tecnico/entities/cotizaciones-tecnico.entity';
import { ServicioEntity } from 'src/servicios/entities/servicio.entity';
import { UsuarioEntity } from 'src/users/entities/usuario.entity';
import { TecnicoEntity } from './tecnico.entity';

export class TecnicoRelatedEntity extends TecnicoEntity {
  @ApiProperty({
    type: [ServicioEntity],
  })
  Servicio: ServicioEntity[];

  @ApiProperty({
    type: [CiudadEntity],
  })
  Ciudad: CiudadEntity[];

  @ApiProperty({
    type: CiudadEntity,
  })
  ViveEn: CiudadEntity;
}

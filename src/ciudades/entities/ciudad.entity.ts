import { ApiProperty } from '@nestjs/swagger';
import { Ciudad } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { EstadoEntity } from 'src/estados/entities/estado.entity';

export class CiudadEntity implements Ciudad {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  latitud: number;

  @ApiProperty()
  longitud: number;

  @ApiProperty()
  estadoId: number;

  @ApiProperty({ type: EstadoEntity })
  Edtado: EstadoEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

import { ApiProperty } from '@nestjs/swagger';
import { Aseguradora } from '@prisma/client';

export class AseguradoraEntity implements Aseguradora {

  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  telefono_domestico: number;

  @ApiProperty()
  telefono_vial: number;

  @ApiProperty()
  telefono_whats: number;

  @ApiProperty()
  kilometraje_permitido: number;

  @ApiProperty()
  costo_por_kilometro: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

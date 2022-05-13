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
  telefono_domestico: string;

  @ApiProperty()
  telefono_vial: string;

  @ApiProperty()
  telefono_whats: string;

  @ApiProperty()
  kilometraje_permitido: number;

  @ApiProperty()
  costo_por_kilometro: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

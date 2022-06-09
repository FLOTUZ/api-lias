import { ApiProperty } from '@nestjs/swagger';
import { Aseguradora } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';

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

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  costo_por_kilometro: Decimal;

  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  costo_por_kilometro_foraneo: Decimal;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

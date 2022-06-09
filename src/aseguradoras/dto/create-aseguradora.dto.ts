import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAseguradoraDto {
  @IsNotEmpty()
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @ApiProperty()
  telefono: string;

  @ApiProperty()
  @IsOptional()
  telefono_domestico: string;

  @ApiProperty()
  @IsOptional()
  telefono_vial: string;

  @ApiProperty()
  @IsOptional()
  telefono_whats: string;

  @ApiProperty()
  @IsOptional()
  kilometraje_permitido: number;

  @ApiProperty({ type: 'number' })
  @IsOptional()
  costo_por_kilometro: Decimal;

  @ApiProperty({ type: 'number' })
  @IsOptional()
  costo_por_kilometro_foraneo: Decimal;
}

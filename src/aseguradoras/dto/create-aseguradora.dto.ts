import { ApiProperty } from '@nestjs/swagger';
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
  telefono_domestico: number;

  @ApiProperty()
  @IsOptional()
  telefono_vial: number;

  @ApiProperty()
  @IsOptional()
  telefono_whats: number;

  @ApiProperty()
  @IsOptional()
  kilometraje_permitido: number;

  @ApiProperty()
  @IsOptional()
  costo_por_kilometro: number;
}

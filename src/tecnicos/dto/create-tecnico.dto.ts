import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { TecnicoEntity } from '../entities/tecnico.entity';

export class CreateTecnicoDto {
  @ApiProperty()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @ApiProperty()
  apellido_paterno: string;

  @IsNotEmpty()
  @ApiProperty()
  apellido_materno: string;

  @IsOptional()
  @ApiProperty({ type: 'number', required: false })
  calificacion: Decimal;

  @ApiProperty()
  @IsNotEmpty()
  telefono: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  usuarioId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  ciudadId: number;

  constructor(partial: Partial<TecnicoEntity>) {
    Object.assign(this, partial);
  }
}

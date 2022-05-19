import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';
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

  @IsDecimal()
  @IsOptional()
  @ApiProperty({ type: 'number', required: false })
  calificacion: Decimal;

  @IsPhoneNumber('MX')
  @ApiProperty()
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

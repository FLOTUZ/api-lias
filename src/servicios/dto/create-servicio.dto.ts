import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateServicioDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Plomeria' })
  nombre: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'DOMESTICO', enum: ['DOMESTICO', 'VIAL'] })
  tipo: string;
}

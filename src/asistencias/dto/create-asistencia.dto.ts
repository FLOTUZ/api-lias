import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAsistenciaDto {
  @IsNotEmpty()
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  aseguradoraId: number;
}

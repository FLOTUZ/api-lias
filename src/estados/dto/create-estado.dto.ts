import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateEstadoDto {
  @IsNotEmpty()
  @MaxLength(25)
  @ApiProperty({ maxLength: 25 })
  nombre: string;
}

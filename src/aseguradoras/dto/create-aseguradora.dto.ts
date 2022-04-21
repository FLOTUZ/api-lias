import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateAseguradoraDto {
  @IsNotEmpty()
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty()
  telefono: string;

  @IsNotEmpty()
  @ApiProperty()
  expediente: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  MaxLength,
} from 'class-validator';

export class CreateUsuariosFinaleDto {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  apellido_paterno: string;

  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  apellido_materno: string;

  @IsEmail()
  @IsOptional()
  @MaxLength(100)
  @ApiProperty({ required: false })
  correo: string;

  @IsNotEmpty()
  @MaxLength(10)
  @IsPhoneNumber('MX')
  @ApiProperty({ required: false })
  telefono: string;
}

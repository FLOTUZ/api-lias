import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class CreateUsuariosFinaleDto {
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @ApiProperty()
  apellido_paterno: string;

  @IsNotEmpty()
  @ApiProperty()
  apellido_materno: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ required: false })
  correo: string;

  @IsNotEmpty()
  @IsPhoneNumber('MX')
  @ApiProperty({ required: false })
  telefono: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  MaxLength,
} from 'class-validator';

export class CreateUsuariosFinaleDto {
  @IsNotEmpty({ message: 'El nombre del usuario final es requerido' })
  @MaxLength(50)
  @ApiProperty()
  nombre: string;

  @IsNotEmpty({ message: 'El apellido del usuario final es requerido' })
  @MaxLength(50)
  @ApiProperty()
  apellido_paterno: string;

  @IsNotEmpty({ message: 'El apellido del usuario final es requerido' })
  @MaxLength(50)
  @ApiProperty()
  apellido_materno: string;

  @IsEmail({ message: 'El email del usuario final es inválido' })
  @IsOptional()
  @MaxLength(100)
  @ApiProperty({ required: false })
  correo: string;

  @IsNotEmpty({
    message: 'El teléfono del usuario final es requerido',
  })
  @MaxLength(10)
  @IsPhoneNumber('MX')
  @ApiProperty({ required: false })
  telefono: string;
}

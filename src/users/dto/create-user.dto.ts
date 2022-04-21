import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre del usuario', example: 'juan' })
  usuario: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'ejemplo@ejemplo.com' })
  email: string;

  @Length(6, 100)
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsOptional()
  @ApiProperty({
    description: 'El usuario esta inactivo? true/false',
    nullable: true,
    required: false,
  })
  inactivo: boolean | null;

  @IsEnum({ enum: ['ADMIN', 'USUARIO', 'TECNICO', 'CAPTURADOR'] })
  @IsOptional()
  @ApiProperty({
    enum: ['ADMIN', 'USUARIO', 'TECNICO', 'CAPTURADOR'],
    example: 'USUARIO',
  })
  rol: string;
}

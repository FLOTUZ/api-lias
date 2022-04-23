import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';

export enum TipoUsuario {
  'ADMIN' = 'ADMIN',
  'USUARIO' = 'USUARIO',
  'TECNICO' = 'TECNICO',
  'CAPTURADOR' = 'CAPTURADOR',
}

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

  @IsEnum(TipoUsuario)
  @IsNotEmpty()
  @ApiProperty({
    enum: ['ADMIN', 'USUARIO', 'TECNICO', 'CAPTURADOR'],
    example: 'USUARIO',
  })
  rol: string;
}

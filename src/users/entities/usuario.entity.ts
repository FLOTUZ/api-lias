import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '@prisma/client';

export class UsuarioEntity implements Usuario {
  @ApiProperty()
  id: number;

  @ApiProperty()
  usuario: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  inactivo: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  rol: string;
}

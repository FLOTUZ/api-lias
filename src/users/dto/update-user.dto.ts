import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: 'Nombre del usuario', example: 'juan' })
  usuario: string;

  @ApiProperty({ example: 'ejemplo@ejemplo.com' })
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({
    description: 'El usuario esta inactivo? true/false',
    nullable: true,
    required: false,
  })
  inactivo: boolean | null;

  @ApiProperty({
    enum: ['ADMIN', 'USUARIO', 'TECNICO', 'CAPTURADOR'],
    example: 'USUARIO',
  })
  rol: string;
}

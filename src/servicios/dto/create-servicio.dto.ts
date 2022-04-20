import { ApiProperty } from '@nestjs/swagger';

export class CreateServicioDto {
  @ApiProperty({ example: 'Plomeria' })
  nombre: string;

  @ApiProperty({ example: 'DOMESTICO', enum: ['DOMESTICO', 'VIAL'] })
  tipo: string;
}

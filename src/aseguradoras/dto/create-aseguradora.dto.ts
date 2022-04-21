import { ApiProperty } from '@nestjs/swagger';

export class CreateAseguradoraDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  expediente: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

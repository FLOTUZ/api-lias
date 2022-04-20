import { ApiProperty } from '@nestjs/swagger';

export class CreateCiudadDto {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  latitud: number;

  @ApiProperty()
  longitud: number;
}

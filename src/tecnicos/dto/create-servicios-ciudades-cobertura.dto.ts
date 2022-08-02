import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateServiciosCiudadesCoberturaDto {
  @ApiProperty({ type: [Number] })
  @IsNotEmpty()
  servicios: number[];

  @ApiProperty({ type: [Number] })
  @IsNotEmpty()
  ciudades_cobertura: number[];
}

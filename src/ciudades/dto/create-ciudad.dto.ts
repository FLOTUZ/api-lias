import { ApiProperty } from '@nestjs/swagger';
import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateCiudadDto {
  @IsNotEmpty()
  @ApiProperty()
  nombre: string;

  @IsOptional()
  @IsLatitude()
  @ApiProperty({ required: false })
  latitud: number;

  @IsOptional()
  @IsLongitude()
  @ApiProperty({ required: false })
  longitud: number;
}

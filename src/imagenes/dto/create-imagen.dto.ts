import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateImagenDto {
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    required: false,
    example: 'http://localhost:3000/imagenes/1.jpg',
  })
  @ApiProperty()
  url: string;

  @IsOptional()
  @ApiProperty({ required: false })
  cotizacionTecnicoId?: number;

  @IsNotEmpty()
  @ApiProperty()
  descripcion: string;
}

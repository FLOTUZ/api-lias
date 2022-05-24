import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateImagenDto {
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    example: 'http://localhost:3000/imagenes/1.jpg',
  })
  @ApiProperty()
  url: string;

  @IsNotEmpty()
  @ApiProperty()
  descripcion: string;
}

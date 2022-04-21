import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateImagenDto {
  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
    example: 'http://localhost:3000/imagenes/1.jpg',
  })
  checkin: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
    example: 'http://localhost:3000/imagenes/1.jpg',
  })
  solucion: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 'http://localhost:3000/imagenes/1.jpg',
  })
  checkout: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 'http://localhost:3000/imagenes/1.jpg',
  })
  firma_conformidad: string;

  @IsNotEmpty()
  @ApiProperty()
  ticketId: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateAsistenciaDto {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  aseguradoraId: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateImageneDto {
  @ApiProperty()
  checkin: string;

  @ApiProperty()
  solucion: string;

  @ApiProperty()
  checkout: string;

  @ApiProperty()
  firma_conformidad: string;

  @ApiProperty()
  ticketId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateConceptoDto {
  @ApiProperty()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ type: 'number' })
  @IsPositive()
  @Type(() => Number)
  @IsNotEmpty()
  costo_mano_obra: Decimal;

  @ApiProperty()
  @IsNotEmpty()
  tipo_conceptoId: number;
}

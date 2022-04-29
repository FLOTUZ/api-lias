import { PartialType } from '@nestjs/swagger';
import { CreateAcuerdosConformidadDto } from './create-acuerdos-conformidad.dto';

export class UpdateAcuerdosConformidadDto extends PartialType(
  CreateAcuerdosConformidadDto,
) {}

import { PartialType } from '@nestjs/swagger';
import { CreateTipoDeConceptoDto } from './create-tipo-de-concepto.dto';

export class UpdateTipoDeConceptoDto extends PartialType(CreateTipoDeConceptoDto) {}

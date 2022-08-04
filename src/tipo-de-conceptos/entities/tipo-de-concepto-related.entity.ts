import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ConceptoEntity } from 'src/conceptos/entities/concepto.entity';
import { TipoDeConceptoEntity } from './tipo-de-concepto.entity';

export class TipoDeConceptoRelatedEntity extends TipoDeConceptoEntity {
  @ApiProperty({ type: [ConceptoEntity] })
  @Type(() => ConceptoEntity)
  Conceptos: ConceptoEntity[];

  constructor(partial: Partial<TipoDeConceptoRelatedEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}

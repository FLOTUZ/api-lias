import { Module } from '@nestjs/common';
import { TipoDeConceptosService } from './tipo-de-conceptos.service';
import { TipoDeConceptosController } from './tipo-de-conceptos.controller';

@Module({
  controllers: [TipoDeConceptosController],
  providers: [TipoDeConceptosService],
})
export class TipoDeConceptosModule {}

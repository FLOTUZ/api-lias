import { Module } from '@nestjs/common';
import { AcuerdosConformidadService } from './acuerdos-conformidad.service';
import { AcuerdosConformidadController } from './acuerdos-conformidad.controller';

@Module({
  controllers: [AcuerdosConformidadController],
  providers: [AcuerdosConformidadService],
})
export class AcuerdosConformidadModule {}

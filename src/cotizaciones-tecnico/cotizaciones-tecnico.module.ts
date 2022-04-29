import { Module } from '@nestjs/common';
import { CotizacionesTecnicoService } from './cotizaciones-tecnico.service';
import { CotizacionesTecnicoController } from './cotizaciones-tecnico.controller';

@Module({
  controllers: [CotizacionesTecnicoController],
  providers: [CotizacionesTecnicoService],
})
export class CotizacionesTecnicoModule {}

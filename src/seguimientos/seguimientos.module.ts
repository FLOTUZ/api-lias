import { Module } from '@nestjs/common';
import { SeguimientosService } from './seguimientos.service';
import { SeguimientosController } from './seguimientos.controller';

@Module({
  controllers: [SeguimientosController],
  providers: [SeguimientosService],
})
export class SeguimientosModule {}

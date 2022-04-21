import { Module } from '@nestjs/common';
import { AseguradorasService } from './aseguradoras.service';
import { AseguradorasController } from './aseguradoras.controller';

@Module({
  controllers: [AseguradorasController],
  providers: [AseguradorasService],
})
export class AseguradorasModule {}

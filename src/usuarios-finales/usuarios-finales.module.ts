import { Module } from '@nestjs/common';
import { UsuariosFinalesService } from './usuarios-finales.service';
import { UsuariosFinalesController } from './usuarios-finales.controller';

@Module({
  controllers: [UsuariosFinalesController],
  providers: [UsuariosFinalesService],
})
export class UsuariosFinalesModule {}

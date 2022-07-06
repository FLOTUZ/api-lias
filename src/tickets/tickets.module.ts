import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TecnicosService } from 'src/tecnicos/tecnicos.service';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, TecnicosService],
})
export class TicketsModule {}

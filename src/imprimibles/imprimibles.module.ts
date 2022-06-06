import { Module } from '@nestjs/common';
import { ImprimiblesService } from './imprimibles.service';
import { ImprimiblesController } from './imprimibles.controller';

@Module({
  controllers: [ImprimiblesController],
  providers: [ImprimiblesService],
})
export class ImprimiblesModule {}

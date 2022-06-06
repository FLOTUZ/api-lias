import { Test, TestingModule } from '@nestjs/testing';
import { ImprimiblesController } from './imprimibles.controller';
import { ImprimiblesService } from './imprimibles.service';

describe('ImprimiblesController', () => {
  let controller: ImprimiblesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImprimiblesController],
      providers: [ImprimiblesService],
    }).compile();

    controller = module.get<ImprimiblesController>(ImprimiblesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

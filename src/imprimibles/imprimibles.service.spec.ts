import { Test, TestingModule } from '@nestjs/testing';
import { ImprimiblesService } from './imprimibles.service';

describe('ImprimiblesService', () => {
  let service: ImprimiblesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImprimiblesService],
    }).compile();

    service = module.get<ImprimiblesService>(ImprimiblesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

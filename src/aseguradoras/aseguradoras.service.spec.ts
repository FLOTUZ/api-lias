import { Test, TestingModule } from '@nestjs/testing';
import { AseguradorasService } from './aseguradoras.service';

describe('AseguradorasService', () => {
  let service: AseguradorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AseguradorasService],
    }).compile();

    service = module.get<AseguradorasService>(AseguradorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

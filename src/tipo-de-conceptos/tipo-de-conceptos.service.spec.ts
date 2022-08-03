import { Test, TestingModule } from '@nestjs/testing';
import { TipoDeConceptosService } from './tipo-de-conceptos.service';

describe('TipoDeConceptosService', () => {
  let service: TipoDeConceptosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDeConceptosService],
    }).compile();

    service = module.get<TipoDeConceptosService>(TipoDeConceptosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

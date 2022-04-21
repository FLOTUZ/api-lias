import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionesTecnicoService } from './cotizaciones-tecnico.service';

describe('CotizacionesTecnicoService', () => {
  let service: CotizacionesTecnicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotizacionesTecnicoService],
    }).compile();

    service = module.get<CotizacionesTecnicoService>(CotizacionesTecnicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

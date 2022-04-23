import { Test, TestingModule } from '@nestjs/testing';
import { AcuerdosConformidadService } from './acuerdos-conformidad.service';

describe('AcuerdosConformidadService', () => {
  let service: AcuerdosConformidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcuerdosConformidadService],
    }).compile();

    service = module.get<AcuerdosConformidadService>(AcuerdosConformidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

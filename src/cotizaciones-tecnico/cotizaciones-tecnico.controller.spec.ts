import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionesTecnicoController } from './cotizaciones-tecnico.controller';
import { CotizacionesTecnicoService } from './cotizaciones-tecnico.service';

describe('CotizacionesTecnicoController', () => {
  let controller: CotizacionesTecnicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizacionesTecnicoController],
      providers: [CotizacionesTecnicoService],
    }).compile();

    controller = module.get<CotizacionesTecnicoController>(CotizacionesTecnicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

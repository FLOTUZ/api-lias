import { Test, TestingModule } from '@nestjs/testing';
import { TipoDeConceptosController } from './tipo-de-conceptos.controller';
import { TipoDeConceptosService } from './tipo-de-conceptos.service';

describe('TipoDeConceptosController', () => {
  let controller: TipoDeConceptosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDeConceptosController],
      providers: [TipoDeConceptosService],
    }).compile();

    controller = module.get<TipoDeConceptosController>(TipoDeConceptosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

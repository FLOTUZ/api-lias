import { Test, TestingModule } from '@nestjs/testing';
import { AcuerdosConformidadController } from './acuerdos-conformidad.controller';
import { AcuerdosConformidadService } from './acuerdos-conformidad.service';

describe('AcuerdosConformidadController', () => {
  let controller: AcuerdosConformidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcuerdosConformidadController],
      providers: [AcuerdosConformidadService],
    }).compile();

    controller = module.get<AcuerdosConformidadController>(
      AcuerdosConformidadController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

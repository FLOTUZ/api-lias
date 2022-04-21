import { Test, TestingModule } from '@nestjs/testing';
import { AseguradorasController } from './aseguradoras.controller';
import { AseguradorasService } from './aseguradoras.service';

describe('AseguradorasController', () => {
  let controller: AseguradorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AseguradorasController],
      providers: [AseguradorasService],
    }).compile();

    controller = module.get<AseguradorasController>(AseguradorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

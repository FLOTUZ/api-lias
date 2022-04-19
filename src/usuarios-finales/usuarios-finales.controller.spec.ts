import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosFinalesController } from './usuarios-finales.controller';
import { UsuariosFinalesService } from './usuarios-finales.service';

describe('UsuariosFinalesController', () => {
  let controller: UsuariosFinalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosFinalesController],
      providers: [UsuariosFinalesService],
    }).compile();

    controller = module.get<UsuariosFinalesController>(
      UsuariosFinalesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

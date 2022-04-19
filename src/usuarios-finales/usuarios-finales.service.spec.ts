import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosFinalesService } from './usuarios-finales.service';

describe('UsuariosFinalesService', () => {
  let service: UsuariosFinalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosFinalesService],
    }).compile();

    service = module.get<UsuariosFinalesService>(UsuariosFinalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

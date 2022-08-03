import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTipoDeConceptoDto } from './dto/create-tipo-de-concepto.dto';
import { UpdateTipoDeConceptoDto } from './dto/update-tipo-de-concepto.dto';

@Injectable()
export class TipoDeConceptosService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: CreateTipoDeConceptoDto) {
    try {
      return await this.prisma.tipoConcepto.create({ data: createDTO });
    } catch (error) {
      throw new ConflictException();
    }
  }

  async findAll() {
    return await this.prisma.tipoConcepto.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const response = await this.prisma.tipoConcepto.findUnique({
      where: { id },
    });
    if (response == null) {
      throw new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
  }

  async update(id: number, updateDTO: UpdateTipoDeConceptoDto) {
    return await this.prisma.tipoConcepto.update({
      where: { id },
      data: updateDTO,
    });
  }

  async remove(id: number) {
    return await this.prisma.tipoConcepto.delete({ where: { id } });
  }
}

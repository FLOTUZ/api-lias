import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';

@Injectable()
export class ConceptosService {
  constructor(private prisma: PrismaService) {}
  async create(createDTO: CreateConceptoDto) {
    try {
      return await this.prisma.concepto.create({ data: createDTO });
    } catch (error) {
      throw new ConflictException();
    }
  }

  async findAll() {
    return await this.prisma.concepto.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const response = await this.prisma.concepto.findUnique({
      where: { id },
    });
    if (response == null) {
      throw new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
  }

  async update(id: number, updateDTO: UpdateConceptoDto) {
    return await this.prisma.concepto.update({
      where: { id },
      data: updateDTO,
    });
  }

  async remove(id: number) {
    return await this.prisma.concepto.delete({ where: { id } });
  }
}

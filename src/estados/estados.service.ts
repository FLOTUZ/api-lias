import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';

@Injectable()
export class EstadosService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateEstadoDto) {
    return this.prisma.estado.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.estado.findMany({});
  }

  async findOne(id: string) {
    const response = await this.prisma.estado.findUnique({
      where: { id: Number(id) },
    });

    if (response == null) {
      return new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
  }

  update(id: string, updateDTO: UpdateEstadoDto) {
    return this.prisma.estado.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.estado.delete({ where: { id: Number(id) } });
  }
}

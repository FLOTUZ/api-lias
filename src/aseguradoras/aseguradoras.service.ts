import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAseguradoraDto } from './dto/create-aseguradora.dto';
import { UpdateAseguradoraDto } from './dto/update-aseguradora.dto';

@Injectable()
export class AseguradorasService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateAseguradoraDto) {
    return this.prisma.aseguradora.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.aseguradora.findMany({});
  }

  async findOne(id: string) {
    const response = await this.prisma.aseguradora.findUnique({
      where: { id: Number(id) },
    });

    if (response == null) {
      return new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
  }

  update(id: string, updateDTO: UpdateAseguradoraDto) {
    return this.prisma.aseguradora.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.aseguradora.delete({ where: { id: Number(id) } });
  }
}

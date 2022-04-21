import { Injectable } from '@nestjs/common';
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

  findOne(id: string) {
    return this.prisma.aseguradora.findUnique({ where: { id: Number(id) } });
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

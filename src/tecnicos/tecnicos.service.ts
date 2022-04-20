import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Injectable()
export class TecnicosService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateTecnicoDto) {
    return this.prisma.tecnico.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.tecnico.findMany({});
  }

  findOne(id: string) {
    return this.prisma.tecnico.findUnique({ where: { id: Number(id) } });
  }

  update(id: string, updateDTO: UpdateTecnicoDto) {
    return this.prisma.tecnico.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.tecnico.delete({ where: { id: Number(id) } });
  }
}

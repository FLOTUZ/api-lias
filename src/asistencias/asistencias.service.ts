import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';

@Injectable()
export class AsistenciasService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateAsistenciaDto) {
    return this.prisma.asistencia.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.asistencia.findMany({});
  }

  async findOne(id: string) {
    const response = await this.prisma.asistencia.findUnique({
      where: { id: Number(id) },
    });

    if (response == null) {
      return new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
  }

  update(id: string, updateDTO: UpdateAsistenciaDto) {
    return this.prisma.asistencia.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.asistencia.delete({ where: { id: Number(id) } });
  }
}

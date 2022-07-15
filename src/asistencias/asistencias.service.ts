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
    return this.prisma.asistencia.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.asistencia.findUnique({
        where: { id: Number(id) },
      });

      if (response == null) {
        return new NotFoundException(`This register did #${id} not exist`);
      } else {
        return response;
      }
    } catch (error) {
      throw new NotFoundException();
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

  getAsistenciaByAseguradora(idAseguradora: string) {
    return this.prisma.asistencia.findMany({
      orderBy: {
        nombre: 'asc',
      },
      where: { aseguradoraId: { equals: Number(idAseguradora) } },
    });
  }
}

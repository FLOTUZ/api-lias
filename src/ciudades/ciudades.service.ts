import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';

@Injectable()
export class CiudadesService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateCiudadDto) {
    return this.prisma.ciudad.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.ciudad.findMany({
      include: {
        Estado: true,
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.ciudad.findUnique({
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

  update(id: string, updateDTO: UpdateCiudadDto) {
    return this.prisma.ciudad.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.ciudad.delete({ where: { id: Number(id) } });
  }

  getCiudadesByEstado(id: string) {
    return this.prisma.ciudad.findMany({
      orderBy: {
        nombre: 'asc',
      },
      where: {
        estadoId: Number(id),
      },
    });
  }
}

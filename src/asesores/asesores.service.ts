import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAsesoreDto } from './dto/create-asesore.dto';
import { UpdateAsesoreDto } from './dto/update-asesore.dto';

@Injectable()
export class AsesoresService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateAsesoreDto) {
    return this.prisma.asesor.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.asesor.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.asesor.findUnique({
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

  update(id: string, updateDTO: UpdateAsesoreDto) {
    return this.prisma.asesor.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.asesor.delete({ where: { id: Number(id) } });
  }

  asesoresByAseguradora(id: string) {
    return this.prisma.asesor.findMany({
      orderBy: {
        nombre: 'asc',
      },
      where: {
        aseguradoraId: Number(id),
      },
    });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateServicioDto) {
    return this.prisma.servicio.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.servicio.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.servicio.findUnique({
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

  update(id: string, updateDTO: UpdateServicioDto) {
    return this.prisma.servicio.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.servicio.delete({ where: { id: Number(id) } });
  }

  getTecnicosByServicio(id: string) {
    return this.prisma.servicio.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        Tecnico: {
          select: {
            id: true,
            nombre: true,
            telefono: true,
          },
        },
      },
    });
  }
}

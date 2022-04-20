import { Injectable } from '@nestjs/common';
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
    return this.prisma.servicio.findMany({});
  }

  findOne(id: string) {
    return this.prisma.servicio.findUnique({ where: { id: Number(id) } });
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
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from './dto/update-seguimiento.dto';

@Injectable()
export class SeguimientosService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateSeguimientoDto) {
    return this.prisma.seguimiento.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.seguimiento.findMany({});
  }

  findOne(id: string) {
    return this.prisma.seguimiento.findUnique({ where: { id: Number(id) } });
  }

  update(id: string, updateDTO: UpdateSeguimientoDto) {
    return this.prisma.seguimiento.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.seguimiento.delete({ where: { id: Number(id) } });
  }
}

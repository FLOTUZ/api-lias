import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCotizacionTecnicoDto } from './dto/create-cotizaciones-tecnico.dto';
import { UpdateCotizacionTecnicoDto } from './dto/update-cotizaciones-tecnico.dto';

@Injectable()
export class CotizacionesTecnicoService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateCotizacionTecnicoDto) {
    return this.prisma.cotizacionTecnico.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.cotizacionTecnico.findMany({});
  }

  findOne(id: string) {
    return this.prisma.cotizacionTecnico.findUnique({
      where: { id: Number(id) },
    });
  }

  update(id: string, updateDTO: UpdateCotizacionTecnicoDto) {
    return this.prisma.cotizacionTecnico.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.cotizacionTecnico.delete({ where: { id: Number(id) } });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
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
    const response = this.prisma.cotizacionTecnico.findUnique({
      where: { id: Number(id) },
    });

    if (response == null) {
      return new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
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

  cotizacionesTecnicoByTecnico(id: string) {
    return this.prisma.cotizacionTecnico.findMany({
      where: { Tecnico: { id: Number(id) } },
    });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Injectable()
export class TecnicosService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateTecnicoDto) {
    return this.prisma.tecnico.create({
      data: createDTO,
      include: { Servicio: true },
    });
  }

  findAll() {
    return this.prisma.tecnico.findMany({
      include: {
        ViveEn: true,
        Servicio: true,
        Ciudad: true,
        Cotizaciones: true,
      },
    });
  }

  async findOne(id: string) {
    const response = await this.prisma.tecnico.findUnique({
      where: { id: Number(id) },
      include: {
        ViveEn: true,
        Servicio: true,
        Ciudad: true,
        Cotizaciones: true,
      },
    });

    if (response == null) {
      return new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
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

  agregarServiciosATecnico(idTecnico: string, servicios: number[]) {
    return this.prisma.tecnico.update({
      include: { Servicio: true },
      where: { id: Number(idTecnico) },
      data: {
        Servicio: { connect: servicios.map((id) => ({ id: Number(id) })) },
      },
    });
  }
}

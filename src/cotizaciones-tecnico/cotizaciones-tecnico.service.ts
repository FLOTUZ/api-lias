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
    return this.prisma.cotizacionTecnico.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.cotizacionTecnico.findUnique({
        where: { id: Number(id) },
      });
      console.log(response);

      if (response == null) {
        return new NotFoundException(`This register did #${id} not exist`);
      } else {
        return response;
      }
    } catch (error) {
      throw new NotFoundException();
    }
  }

  update(id: string, updateDTO: UpdateCotizacionTecnicoDto) {
    return this.prisma.cotizacionTecnico.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  async remove(id: string) {
    try {
      const tecnico = await this.prisma.cotizacionTecnico.delete({
        where: { id: Number(id) },
      });
      return tecnico;
    } catch (error) {
      throw new NotFoundException(`This register did #${id} not exist`);
    }
  }

  cotizacionesTecnicoByTecnico(id: string) {
    return this.prisma.cotizacionTecnico.findMany({
      where: { Tecnico: { id: Number(id) } },
    });
  }

  async cotizacionByTicket(idTicket: string) {
    try {
      const cotizacion = await this.prisma.cotizacionTecnico.findUnique({
        where: {
          ticketId: Number(idTicket),
        },
      });
      if (cotizacion == null) {
        throw new NotFoundException();
      }
      return cotizacion;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async statusCotizacionById(idCotizacion: string) {
    try {
      const cotizacion = await this.prisma.cotizacionTecnico.findUnique({
        where: {
          id: Number(idCotizacion),
        },
      });
      return cotizacion;
    } catch (error) {
      console.log(error);

      throw new NotFoundException();
    }
  }
}

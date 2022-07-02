import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.prisma.seguimiento.findMany({
      include: {
        Usuario: true,
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.seguimiento.findUnique({
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

  update(id: string, updateDTO: UpdateSeguimientoDto) {
    return this.prisma.seguimiento.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.seguimiento.delete({ where: { id: Number(id) } });
  }

  getSeguiminetosByTicket(idTicketId: number) {
    try {
      const seguimientosByTicket = this.prisma.seguimiento.findMany({
        where: {
          ticketId: Number(idTicketId),
        },
        include: {
          Usuario: true,
        },
      });
      return seguimientosByTicket;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}

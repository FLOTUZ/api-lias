import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAcuerdosConformidadDto } from './dto/create-acuerdos-conformidad.dto';
import { UpdateAcuerdosConformidadDto } from './dto/update-acuerdos-conformidad.dto';

@Injectable()
export class AcuerdosConformidadService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateAcuerdosConformidadDto) {
    return this.prisma.acuerdoConformidad.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.acuerdoConformidad.findMany({});
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.acuerdoConformidad.findUnique({
        where: { id: Number(id) },
      });
      if (response == null) {
        return new NotFoundException();
      } else {
        return response;
      }
    } catch (error) {
      throw new NotFoundException();
    }
  }

  update(id: string, updateDTO: UpdateAcuerdosConformidadDto) {
    return this.prisma.acuerdoConformidad.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.acuerdoConformidad.delete({ where: { id: Number(id) } });
  }

  async getByIdTicket(idTicket: string) {
    return await this.prisma.acuerdoConformidad.findUnique({
      where: { ticketId: Number(idTicket) },
    });
  }

  async getAcuerdoWithNodes(idAcuerdo: string) {
    return await this.prisma.acuerdoConformidad.findUnique({
      where: { id: Number(idAcuerdo) },
      include: {
        UsuarioFinal: true,
        Ticket: {
          include: {
            Asesor: true,
            Asistencia: true,
          },
        },
      },
    });
  }
}

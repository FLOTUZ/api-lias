import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAcuerdosConformidadDto } from './dto/create-acuerdos-conformidad.dto';
import { UpdateAcuerdosConformidadDto } from './dto/update-acuerdos-conformidad.dto';

@Injectable()
export class AcuerdosConformidadService {
  constructor(private prisma: PrismaService) {}

  async create(createDTO: CreateAcuerdosConformidadDto) {
    const acuerdo = await this.prisma.acuerdoConformidad.create({
      data: createDTO,
    });
    //Se genera la direccion completa del acuerdo
    if (acuerdo.ticketId) {
      const ticket = (await this.getAcuerdoWithNodes(String(acuerdo.id)))
        .Ticket;
      acuerdo.direccion = `${ticket.calle}, ${ticket.numero_domicilio},
     ${ticket.num_interior}, ${ticket.colonia},
     ${ticket.Ciudad.nombre}, ${ticket.Ciudad.Estado.nombre}`;

      return await this.update(String(acuerdo.id), acuerdo);
    } else {
      throw new InternalServerErrorException(
        'Error al generar la direccion del acuerdo',
      );
    }
  }

  findAll() {
    return this.prisma.acuerdoConformidad.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    try {
      return await this.prisma.acuerdoConformidad.findUnique({
        where: { id: Number(id) },
        include: {
          Usuario_Aprobador: true,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateDTO: UpdateAcuerdosConformidadDto) {
    return await this.prisma.acuerdoConformidad.update({
      where: { id: Number(id) },
      data: updateDTO,
      include: {
        Usuario_Aprobador: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.acuerdoConformidad.delete({ where: { id: Number(id) } });
  }

  async getByIdTicket(idTicket: string) {
    const acuerdo = await this.prisma.acuerdoConformidad.findUnique({
      where: { ticketId: Number(idTicket) },
      include: {
        Usuario_Aprobador: true,
      },
    });
    if (acuerdo) {
      return acuerdo;
    } else {
      throw new NotFoundException();
    }
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
            Ciudad: {
              include: {
                Estado: true,
              },
            },
          },
        },
      },
    });
  }
}

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TecnicoRelatedEntity } from 'src/tecnicos/entities/tecnicoRelated.entity';
import { TecnicosService } from 'src/tecnicos/tecnicos.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketEntity } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    private prisma: PrismaService,
    private tecnicoService: TecnicosService,
  ) {}

  create(createDTO: CreateTicketDto) {
    return this.prisma.ticket.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.ticket.findMany({
      orderBy: {
        fecha_llamada: 'desc',
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.ticket.findUnique({
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

  update(id: string, updateDTO: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.ticket.delete({ where: { id: Number(id) } });
  }

  async ticketsByCiudadOfUser(id: number) {
    const user = await this.prisma.usuario.findUnique({ where: { id: id } });
    const tecnico = new TecnicoRelatedEntity(
      await this.tecnicoService.getTecnicoByUserId(String(user.id)),
    );

    const tickets = await this.prisma.ticket.findMany({
      where: {
        ciudadId: tecnico.ciudadId,
        estado: 'NUEVO',
        Servicio: {
          some: {
            id: {
              in: tecnico.Servicio.map((servicio) => servicio.id),
            },
          },
        },
      },
    });

    return tickets;
  }

  async agregarServicioATicket(idTicket: string, servicios: number[]) {
    return this.prisma.ticket.update({
      include: { Servicio: true },
      where: { id: Number(idTicket) },
      data: {
        Servicio: { connect: servicios.map((id) => ({ id: Number(id) })) },
      },
    });
  }

  async ticketsByEstatus(estado: string) {
    try {
      return this.prisma.ticket.findMany({
        where: { estado: estado },
      });
    } catch (error) {
      throw new NotFoundException(`This register did #${estado} not exist`);
    }
  }

  async tomarTicket(idTicket: string, updateDto: UpdateTicketDto) {
    //Se obtiene la propiedad tecnicoId mediante destrucuracion
    //Si el ticket no existe, el mismo enpoint de findOne retornara un 404
    const { tecnicoId } = (await this.findOne(idTicket)) as TicketEntity;

    //Si el id del tecnico del ticket no ha sido asignado
    if (tecnicoId === null && tecnicoId !== 0) {
      //Se actualiza el ticket con el tecnico asignado
      return this.update(idTicket, updateDto);
    } else {
      throw new ConflictException('El ticket ya fue tomado');
    }
  }

  async ticketsOfTecnico(idTecnico: string) {
    return await this.prisma.ticket.findMany({
      where: { tecnicoId: Number(idTecnico) },
    });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateTicketDto) {
    return this.prisma.ticket.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.ticket.findMany();
  }

  async findOne(id: string) {
    const response = await this.prisma.ticket.findUnique({
      where: { id: Number(id) },
    });

    if (response == null) {
      return new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
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

  async agregarServicioATicket(idTicket: string, servicios: number[]) {
    return this.prisma.ticket.update({
      include: { Servicio: true },
      where: { id: Number(idTicket) },
      data: {
        Servicio: { connect: servicios.map((id) => ({ id: Number(id) })) },
      },
    });
  }
}

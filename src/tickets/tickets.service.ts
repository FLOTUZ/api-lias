import { Injectable } from '@nestjs/common';
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
    return this.prisma.ticket.findMany({});
  }

  findOne(id: string) {
    return this.prisma.ticket.findUnique({ where: { id: Number(id) } });
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
}

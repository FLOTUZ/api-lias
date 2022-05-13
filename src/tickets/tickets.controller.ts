import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TicketEntity } from './entities/ticket.entity';

@Controller('tickets')
@ApiTags('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @ApiOkResponse({ status: 200, type: TicketEntity })
  create(@Body() createDTO: CreateTicketDto) {
    return this.ticketsService.create(createDTO);
  }

  @Get()
  @ApiOkResponse({ status: 200, type: [TicketEntity] })
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: TicketEntity })
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ status: 200, type: TicketEntity })
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketsService.update(id, updateTicketDto);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 200, type: TicketEntity })
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(id);
  }

  @Post(':id/servicios')
  addServicesToTecnico(@Param('id') id: string, @Body() servicios: number[]) {
    return this.ticketsService.agregarServicioATicket(id, servicios);
  }
}

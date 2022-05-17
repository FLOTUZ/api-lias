import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TicketEntity } from './entities/ticket.entity';

@Controller('tickets')
@ApiTags('tickets')
@UseInterceptors(ClassSerializerInterceptor)
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @ApiOkResponse({ status: 200, type: TicketEntity })
  async create(@Body() createDTO: CreateTicketDto) {
    return new TicketEntity(await this.ticketsService.create(createDTO));
  }

  @Get()
  @ApiOkResponse({ status: 200, type: [TicketEntity] })
  async findAll() {
    const list = await this.ticketsService.findAll();
    return list.map((item) => new TicketEntity(item));
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: TicketEntity })
  async findOne(@Param('id') id: string) {
    return new TicketEntity(await this.ticketsService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ status: 200, type: TicketEntity })
  async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return new TicketEntity(
      await this.ticketsService.update(id, updateTicketDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ status: 200, type: TicketEntity })
  async remove(@Param('id') id: string) {
    return new TicketEntity(await this.ticketsService.remove(id));
  }

  @Post(':id/servicios')
  addServicesToTecnico(@Param('id') id: string, @Body() servicios: number[]) {
    return this.ticketsService.agregarServicioATicket(id, servicios);
  }
}

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
  UseGuards,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto, EstadoTicket } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TicketEntity } from './entities/ticket.entity';
import { JwtRtGuard } from 'src/auth/guards';

@Controller('tickets')
@ApiTags('tickets')
@UseGuards(JwtRtGuard)
@ApiBearerAuth()
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

  @Get('estado/:estado')
  @ApiOkResponse({ status: 200, type: [TicketEntity] })
  async ticketsByEstatus(@Param('estado') estado: EstadoTicket) {
    const list = await this.ticketsService.ticketsByEstatus(estado);
    return list.map((item) => new TicketEntity(item));
  }
}

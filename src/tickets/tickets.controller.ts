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
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TicketEntity } from './entities/ticket.entity';
import { JwtRtGuard } from 'src/auth/guards';
import { GetCurrentUserId } from 'src/auth/decorators';
import { TicketRelatedEntity } from './entities/ticket-related.entity';

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

  @Get('ciudad')
  @ApiBearerAuth()
  @UseGuards(JwtRtGuard)
  @ApiOperation({
    summary: 'Consultar tickets por la ciudad del tecnico logueado en la app',
  })
  @ApiOkResponse({ status: 200, type: [TicketEntity] })
  async ticketsByCiudadOfUser(@GetCurrentUserId() userId: number) {
    return (await this.ticketsService.ticketsByCiudadOfUser(userId)).map(
      (item) => new TicketEntity(item),
    );
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: TicketRelatedEntity })
  async findOne(@Param('id') id: string) {
    return new TicketRelatedEntity(await this.ticketsService.findOne(id));
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

  @Patch('tomar/:id')
  @ApiOkResponse({ status: 200, type: [TicketEntity] })
  @ApiOperation({
    summary: 'Se toma el ticket si el ticket no tiene tecnico ya asignado',
  })
  async tomarTicket(
    @Param('id') id: string,
    @Body() updateDto: UpdateTicketDto,
  ) {
    return new TicketEntity(
      await this.ticketsService.tomarTicket(id, updateDto),
    );
  }

  @Get('tecnico/:id')
  @ApiOperation({ summary: 'Consultar tickets por el id del tecnico' })
  @ApiOkResponse({ status: 200, type: [TicketEntity] })
  async ticketsOfTecnico(@Param('id') id: string) {
    const list = await this.ticketsService.ticketsOfTecnico(id);
    return list.map((item) => new TicketEntity(item));
  }
}

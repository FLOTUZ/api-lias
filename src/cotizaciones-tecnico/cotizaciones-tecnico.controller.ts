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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { type } from 'os';
import { CotizacionesTecnicoService } from './cotizaciones-tecnico.service';
import { CreateCotizacionTecnicoDto } from './dto/create-cotizaciones-tecnico.dto';
import { UpdateCotizacionTecnicoDto } from './dto/update-cotizaciones-tecnico.dto';
import { CotizacionTecnicoEntity } from './entities/cotizaciones-tecnico.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('cotizaciones-tecnico')
@ApiTags('cotizaciones-tecnico')
export class CotizacionesTecnicoController {
  constructor(private readonly service: CotizacionesTecnicoService) {}

  @Post()
  @ApiCreatedResponse({
    type: CotizacionTecnicoEntity,
  })
  async create(
    @Body() createCotizacionesTecnicoDto: CreateCotizacionTecnicoDto,
  ) {
    return new CotizacionTecnicoEntity(
      await this.service.create(createCotizacionesTecnicoDto),
    );
  }

  @Get()
  @ApiOkResponse({
    type: [CotizacionTecnicoEntity],
  })
  async findAll() {
    const list = await this.service.findAll();
    return list.map((item) => new CotizacionTecnicoEntity(item));
  }

  @Get(':id')
  @ApiOkResponse({
    type: CotizacionTecnicoEntity,
  })
  async findOne(@Param('id') id: string) {
    return new CotizacionTecnicoEntity(await this.service.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({
    type: CotizacionTecnicoEntity,
  })
  async update(
    @Param('id') id: string,
    @Body() updateCotizacionesTecnicoDto: UpdateCotizacionTecnicoDto,
  ) {
    return new CotizacionTecnicoEntity(
      await this.service.update(id, updateCotizacionesTecnicoDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({
    type: CotizacionTecnicoEntity,
  })
  async remove(@Param('id') id: string) {
    return new CotizacionTecnicoEntity(await this.service.remove(id));
  }

  @Get('/tecnico/:id')
  @ApiOkResponse({
    type: [CotizacionTecnicoEntity],
    description: 'Cotizaciones de un tecnico',
  })
  async cotizacionesTecnicoByTecnico(@Param('id') id: string) {
    const list = await this.service.cotizacionesTecnicoByTecnico(id);
    return list.map((item) => new CotizacionTecnicoEntity(item));
  }

  @Get('/ticket/:id')
  @ApiResponse({
    type: CotizacionTecnicoEntity,
  })
  async cotizacionByTicket(@Param('id') id: string) {
    return new CotizacionTecnicoEntity(
      await this.service.cotizacionByTicket(id),
    );
  }

  @Get('/:id/status')
  @ApiResponse({
    type: CotizacionTecnicoEntity,
  })
  async statusCotizacionById(@Param('id') id: string) {
    return new CotizacionTecnicoEntity(
      await this.service.statusCotizacionById(id),
    );
  }
}

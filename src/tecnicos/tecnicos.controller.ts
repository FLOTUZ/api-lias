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
import { TecnicosService } from './tecnicos.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TecnicoEntity } from './entities/tecnico.entity';
import { TecnicoRelatedEntity } from './entities/tecnicoRelated.entity';
import { ServicesOfTecnicoEntity } from './entities/services-of-tecnico.entity';
import { CreateServiciosCiudadesCoberturaDto } from './dto/create-servicios-ciudades-cobertura.dto';

@Controller('tecnicos')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('tecnicos')
export class TecnicosController {
  constructor(private readonly tecnicosService: TecnicosService) {}

  @Post()
  @ApiOkResponse({
    status: 200,
    type: TecnicoEntity,
  })
  async create(@Body() createTecnicoDto: CreateTecnicoDto) {
    return new TecnicoEntity(
      await this.tecnicosService.create(createTecnicoDto),
    );
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: TecnicoRelatedEntity,
  })
  async findAll() {
    const list = await this.tecnicosService.findAll();
    return list.map((item) => new TecnicoRelatedEntity(item));
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: TecnicoRelatedEntity,
  })
  async findOne(@Param('id') id: string) {
    return new TecnicoRelatedEntity(await this.tecnicosService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: TecnicoEntity,
  })
  async update(
    @Param('id') id: string,
    @Body() updateTecnicoDto: UpdateTecnicoDto,
  ) {
    return new TecnicoEntity(
      await this.tecnicosService.update(id, updateTecnicoDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: TecnicoEntity,
  })
  async remove(@Param('id') id: string) {
    return new TecnicoEntity(await this.tecnicosService.remove(id));
  }

  @Post(':id/servicios-ciudadescobertura')
  @ApiOperation({
    summary: 'Agregar servicios y ciudades de cobertura a un tecnico',
  })
  async addServicesAndCiudadesCoberturaToTecnico(
    @Param('id') id: string,
    @Body()
    { servicios, ciudades_cobertura }: CreateServiciosCiudadesCoberturaDto,
  ) {
    return new TecnicoRelatedEntity(
      await this.tecnicosService.addServicesAndCiudadesCoberturaToTecnico(
        id,
        servicios,
        ciudades_cobertura,
      ),
    );
  }

  @Patch(':id/servicios')
  @ApiOperation({
    summary: 'Editar los servicios a un tecnico',
  })
  async editarServiciosDeTecnico(
    @Param('id') id: string,
    @Body() servicios: number[],
  ) {
    return new TecnicoRelatedEntity(
      await this.tecnicosService.editarServiciosDeTecnico(id, servicios),
    );
  }

  @Get(':id/servicios')
  @ApiOkResponse({
    type: ServicesOfTecnicoEntity,
  })
  @ApiOperation({ summary: 'Consultar tecnico con sus servicios' })
  async getServicesOfTecnico(@Param('id') id: string) {
    return new ServicesOfTecnicoEntity(
      await this.tecnicosService.getServicesOfTecnico(id),
    );
  }

  @Get('user/:id')
  @ApiOkResponse({
    status: 200,
    type: TecnicoRelatedEntity,
  })
  @ApiOperation({ summary: 'Consultar tecnico por su id de usuario' })
  async getTecnicoByUserId(@Param('id') id: string) {
    return new TecnicoRelatedEntity(
      await this.tecnicosService.getTecnicoByUserId(id),
    );
  }
}

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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TecnicoEntity } from './entities/tecnico.entity';
import { TecnicoRelatedEntity } from './entities/tecnicoRelated.entity';

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
  remove(@Param('id') id: string) {
    return this.tecnicosService.remove(id);
  }

  @Post(':id/servicios')
  addServicesToTecnico(@Param('id') id: string, @Body() servicios: number[]) {
    return this.tecnicosService.agregarServiciosATecnico(id, servicios);
  }
}

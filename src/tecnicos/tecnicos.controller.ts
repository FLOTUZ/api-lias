import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TecnicosService } from './tecnicos.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TecnicoEntity } from './entities/tecnico.entity';

@Controller('tecnicos')
@ApiTags('tecnicos')
export class TecnicosController {
  constructor(private readonly tecnicosService: TecnicosService) {}

  @Post()
  @ApiOkResponse({
    status: 200,
    type: TecnicoEntity,
  })
  create(@Body() createTecnicoDto: CreateTecnicoDto) {
    return this.tecnicosService.create(createTecnicoDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [TecnicoEntity],
  })
  findAll() {
    return this.tecnicosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: TecnicoEntity,
  })
  findOne(@Param('id') id: string) {
    return this.tecnicosService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: TecnicoEntity,
  })
  update(@Param('id') id: string, @Body() updateTecnicoDto: UpdateTecnicoDto) {
    return this.tecnicosService.update(id, updateTecnicoDto);
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

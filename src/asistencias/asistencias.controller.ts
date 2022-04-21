import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AsistenciasService } from './asistencias.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { AsistenciaEntity } from './entities/asistencia.entity';

@Controller('asistencias')
@ApiTags('asistencias')
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) {}

  @Post()
  @ApiOkResponse({
    status: 201,
    type: AsistenciaEntity,
  })
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciasService.create(createAsistenciaDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [AsistenciaEntity],
  })
  findAll() {
    return this.asistenciasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: AsistenciaEntity,
  })
  findOne(@Param('id') id: string) {
    return this.asistenciasService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 201,
    type: AsistenciaEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateAsistenciaDto: UpdateAsistenciaDto,
  ) {
    return this.asistenciasService.update(id, updateAsistenciaDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 201,
    type: AsistenciaEntity,
  })
  remove(@Param('id') id: string) {
    return this.asistenciasService.remove(id);
  }
}

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
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { EstadoEntity } from './entities/estado.entity';
import { EstadosService } from './estados.service';

@Controller('estados')
@ApiTags('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  @Post()
  @ApiOkResponse({
    status: 201,
    type: EstadoEntity,
  })
  create(@Body() createEstadoDto: CreateEstadoDto) {
    return this.estadosService.create(createEstadoDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [EstadoEntity],
  })
  findAll() {
    return this.estadosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: EstadoEntity,
  })
  findOne(@Param('id') id: string) {
    return this.estadosService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: EstadoEntity,
  })
  update(@Param('id') id: string, @Body() updateEstadoDto: UpdateEstadoDto) {
    return this.estadosService.update(id, updateEstadoDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: EstadoEntity,
  })
  remove(@Param('id') id: string) {
    return this.estadosService.remove(id);
  }
}

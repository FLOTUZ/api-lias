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
import { CiudadesService } from './ciudades.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { CiudadEntity } from './entities/ciudad.entity';

@Controller('ciudades')
@ApiTags('ciudades')
export class CiudadesController {
  constructor(private readonly ciudadesService: CiudadesService) {}

  @Post()
  @ApiOkResponse({
    status: 201,
    type: CiudadEntity,
  })
  create(@Body() createCiudadeDto: CreateCiudadDto) {
    return this.ciudadesService.create(createCiudadeDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [CiudadEntity],
  })
  findAll() {
    return this.ciudadesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: CiudadEntity,
  })
  findOne(@Param('id') id: string) {
    return this.ciudadesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: CiudadEntity,
  })
  update(@Param('id') id: string, @Body() updateCiudadeDto: UpdateCiudadDto) {
    return this.ciudadesService.update(id, updateCiudadeDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: CiudadEntity,
  })
  remove(@Param('id') id: string) {
    return this.ciudadesService.remove(id);
  }

  @Get('/estado/:id')
  getCiudadesByEstado(@Param('id') id: string) {
    return this.ciudadesService.getCiudadesByEstado(id);
  }
}

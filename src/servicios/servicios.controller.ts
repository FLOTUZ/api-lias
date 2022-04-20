import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ServicioEntity } from './entities/servicio.entity';

@Controller('servicios')
@ApiTags('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post()
  @ApiOkResponse({
    status: 200,
    type: ServicioEntity,
  })
  create(@Body() createServicioDto: CreateServicioDto) {
    return this.serviciosService.create(createServicioDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [ServicioEntity],
  })
  findAll() {
    return this.serviciosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: ServicioEntity,
  })
  findOne(@Param('id') id: string) {
    return this.serviciosService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: ServicioEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateServicioDto: UpdateServicioDto,
  ) {
    return this.serviciosService.update(id, updateServicioDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: ServicioEntity,
  })
  remove(@Param('id') id: string) {
    return this.serviciosService.remove(id);
  }
}

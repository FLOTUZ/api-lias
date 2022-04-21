import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CotizacionesTecnicoService } from './cotizaciones-tecnico.service';
import { CreateCotizacionTecnicoDto } from './dto/create-cotizaciones-tecnico.dto';
import { UpdateCotizacionTecnicoDto } from './dto/update-cotizaciones-tecnico.dto';
import { CotizacionesTecnicoEntity } from './entities/cotizaciones-tecnico.entity';

@Controller('cotizaciones-tecnico')
@ApiTags('cotizaciones-tecnico')
export class CotizacionesTecnicoController {
  constructor(
    private readonly cotizacionesTecnicoService: CotizacionesTecnicoService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: CotizacionesTecnicoEntity,
  })
  create(@Body() createCotizacionesTecnicoDto: CreateCotizacionTecnicoDto) {
    return this.cotizacionesTecnicoService.create(createCotizacionesTecnicoDto);
  }

  @Get()
  @ApiOkResponse({
    type: [CotizacionesTecnicoEntity],
  })
  findAll() {
    return this.cotizacionesTecnicoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: CotizacionesTecnicoEntity,
  })
  findOne(@Param('id') id: string) {
    return this.cotizacionesTecnicoService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: CotizacionesTecnicoEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateCotizacionesTecnicoDto: UpdateCotizacionTecnicoDto,
  ) {
    return this.cotizacionesTecnicoService.update(
      id,
      updateCotizacionesTecnicoDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({
    type: CotizacionesTecnicoEntity,
  })
  remove(@Param('id') id: string) {
    return this.cotizacionesTecnicoService.remove(id);
  }
}

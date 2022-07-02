import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { SeguimientosService } from './seguimientos.service';
import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from './dto/update-seguimiento.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SeguimientoEntity } from './entities/seguimiento.entity';
import { SeguimientoRelatedEntity } from './entities/seguimiento-related.entity';

@ApiTags('seguimientos')
@Controller('seguimientos')
export class SeguimientosController {
  constructor(private readonly seguimientosService: SeguimientosService) {}

  @Post()
  @ApiOkResponse({
    status: 200,
    type: SeguimientoEntity,
  })
  create(@Body() createSeguimientoDto: CreateSeguimientoDto) {
    return this.seguimientosService.create(createSeguimientoDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [SeguimientoRelatedEntity],
  })
  findAll() {
    return this.seguimientosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: SeguimientoEntity,
  })
  findOne(@Param('id') id: string) {
    return this.seguimientosService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: SeguimientoEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateSeguimientoDto: UpdateSeguimientoDto,
  ) {
    return this.seguimientosService.update(id, updateSeguimientoDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: SeguimientoEntity,
  })
  remove(@Param('id') id: string) {
    return this.seguimientosService.remove(id);
  }

  @Get('ticket/:id')
  @ApiOkResponse({
    status: 200,
    type: [SeguimientoEntity],
  })
  @ApiOperation({
    summary: 'Consultar seguimientos by ticket',
  })
  getSeguiminetosByTicket(@Param('id', ParseIntPipe) id: number) {
    return this.seguimientosService.getSeguiminetosByTicket(id);
  }
}

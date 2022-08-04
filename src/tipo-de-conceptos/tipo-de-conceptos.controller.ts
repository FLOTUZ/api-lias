import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { TipoDeConceptosService } from './tipo-de-conceptos.service';
import { CreateTipoDeConceptoDto } from './dto/create-tipo-de-concepto.dto';
import { UpdateTipoDeConceptoDto } from './dto/update-tipo-de-concepto.dto';
import { TipoDeConceptoEntity } from './entities/tipo-de-concepto.entity';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TipoDeConceptoRelatedEntity } from './entities/tipo-de-concepto-related.entity';

@ApiTags('tipo-de-concepto')
@Controller('tipo-de-concepto')
export class TipoDeConceptosController {
  constructor(private readonly service: TipoDeConceptosService) {}

  @ApiResponse({ status: 201, type: TipoDeConceptoEntity })
  @Post()
  async create(@Body() createConceptoDto: CreateTipoDeConceptoDto) {
    return new TipoDeConceptoEntity(
      await this.service.create(createConceptoDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: [TipoDeConceptoEntity] })
  async findAll() {
    const rows = await this.service.findAll();
    return rows.map((row) => new TipoDeConceptoEntity(row));
  }

  @Get(':id')
  @ApiOkResponse({ type: TipoDeConceptoEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new TipoDeConceptoEntity(await this.service.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: TipoDeConceptoEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConceptoDto: UpdateTipoDeConceptoDto,
  ) {
    return new TipoDeConceptoEntity(
      await this.service.update(id, updateConceptoDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: TipoDeConceptoEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new TipoDeConceptoEntity(await this.service.remove(id));
  }

  @Post('/servicio')
  @ApiResponse({ status: 201, type: [TipoDeConceptoRelatedEntity] })
  @ApiOperation({
    summary: 'Obtener los tipos de conceptos por tipo de tecnico',
  })
  async getTipoConceptosByServicios(@Body() tipoTecnico: number[]) {
    try {
      tipoTecnico = tipoTecnico.map((item) => Number(item));
    } catch (error) {
      throw new BadRequestException('Tipo de tecnico invalido');
    }
    const rows = await this.service.getTipoConceptosByServicios(tipoTecnico);
    return rows.map((row) => new TipoDeConceptoRelatedEntity(row));
  }
}

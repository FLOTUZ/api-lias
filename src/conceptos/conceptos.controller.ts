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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConceptosService } from './conceptos.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { ConceptoEntity } from './entities/concepto.entity';

@Controller('conceptos')
@ApiTags('conceptos')
export class ConceptosController {
  constructor(private readonly service: ConceptosService) {}

  @Post()
  async create(@Body() createConceptoDto: CreateConceptoDto) {
    return new ConceptoEntity(await this.service.create(createConceptoDto));
  }

  @Get()
  async findAll() {
    const rows = await this.service.findAll();
    return rows.map((row) => new ConceptoEntity(row));
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new ConceptoEntity(await this.service.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConceptoDto: UpdateConceptoDto,
  ) {
    return new ConceptoEntity(await this.service.update(id, updateConceptoDto));
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ConceptoEntity(await this.service.remove(id));
  }

  @Post('/tipo-concepto')
  @ApiResponse({ status: 201, type: [ConceptoEntity] })
  @ApiOperation({
    summary: 'Consulta conceptos por tipo de conceptos',
  })
  async conceptosByTipoConcepto(@Body() tipoConceptos: number[]) {
    try {
      tipoConceptos = tipoConceptos.map((item) => Number(item));
    } catch (error) {
      throw new BadRequestException('Tipo de tecnico invalido');
    }
    const rows = await this.service.conceptosByTipoConcepto(tipoConceptos);
    return rows.map((row) => new ConceptoEntity(row));
  }
}

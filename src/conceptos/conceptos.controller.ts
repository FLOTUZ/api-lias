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
import { ApiTags } from '@nestjs/swagger';
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
}

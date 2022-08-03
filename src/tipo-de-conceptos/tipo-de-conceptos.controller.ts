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
import { TipoDeConceptosService } from './tipo-de-conceptos.service';
import { CreateTipoDeConceptoDto } from './dto/create-tipo-de-concepto.dto';
import { UpdateTipoDeConceptoDto } from './dto/update-tipo-de-concepto.dto';
import { TipoDeConceptoEntity } from './entities/tipo-de-concepto.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tipo-de-conceptos ')
@Controller('tipo-de-conceptos')
export class TipoDeConceptosController {
  constructor(private readonly service: TipoDeConceptosService) {}

  @Post()
  async create(@Body() createConceptoDto: CreateTipoDeConceptoDto) {
    return new TipoDeConceptoEntity(
      await this.service.create(createConceptoDto),
    );
  }

  @Get()
  async findAll() {
    const rows = await this.service.findAll();
    return rows.map((row) => new TipoDeConceptoEntity(row));
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new TipoDeConceptoEntity(await this.service.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConceptoDto: UpdateTipoDeConceptoDto,
  ) {
    return new TipoDeConceptoEntity(
      await this.service.update(id, updateConceptoDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new TipoDeConceptoEntity(await this.service.remove(id));
  }
}

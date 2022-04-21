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
import { AseguradorasService } from './aseguradoras.service';
import { CreateAseguradoraDto } from './dto/create-aseguradora.dto';
import { UpdateAseguradoraDto } from './dto/update-aseguradora.dto';
import { AseguradoraEntity } from './entities/aseguradora.entity';

@Controller('aseguradoras')
@ApiTags('aseguradoras')
export class AseguradorasController {
  constructor(private readonly aseguradorasService: AseguradorasService) {}

  @Post()
  @ApiOkResponse({
    status: 201,
    type: AseguradoraEntity,
  })
  create(@Body() createAseguradoraDto: CreateAseguradoraDto) {
    return this.aseguradorasService.create(createAseguradoraDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [AseguradoraEntity],
  })
  findAll() {
    return this.aseguradorasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: AseguradoraEntity,
  })
  findOne(@Param('id') id: string) {
    return this.aseguradorasService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: AseguradoraEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateAseguradoraDto: UpdateAseguradoraDto,
  ) {
    return this.aseguradorasService.update(id, updateAseguradoraDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: AseguradoraEntity,
  })
  remove(@Param('id') id: string) {
    return this.aseguradorasService.remove(id);
  }
}

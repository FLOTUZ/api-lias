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
import { TicketEntity } from 'src/tickets/entities/ticket.entity';
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
  async findAll() {
    const list = await this.aseguradorasService.findAll();
    return list.map((item) => new AseguradoraEntity(item));
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: AseguradoraEntity,
  })
  async findOne(@Param('id') id: string) {
    return new AseguradoraEntity(await this.aseguradorasService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: AseguradoraEntity,
  })
  async update(
    @Param('id') id: string,
    @Body() updateAseguradoraDto: UpdateAseguradoraDto,
  ) {
    return new AseguradoraEntity(
      await this.aseguradorasService.update(id, updateAseguradoraDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: AseguradoraEntity,
  })
  async remove(@Param('id') id: string) {
    return new AseguradoraEntity(await this.aseguradorasService.remove(id));
  }
}

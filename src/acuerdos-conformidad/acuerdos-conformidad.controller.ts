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
import { AcuerdosConformidadService } from './acuerdos-conformidad.service';
import { CreateAcuerdosConformidadDto } from './dto/create-acuerdos-conformidad.dto';
import { UpdateAcuerdosConformidadDto } from './dto/update-acuerdos-conformidad.dto';
import { AcuerdoConformidadEntity } from './entities/acuerdos-conformidad.entity';

@Controller('acuerdos-conformidad')
@ApiTags('acuerdos-conformidad')
export class AcuerdosConformidadController {
  constructor(
    private readonly acuerdosConformidadService: AcuerdosConformidadService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: AcuerdoConformidadEntity })
  create(@Body() createDto: CreateAcuerdosConformidadDto) {
    return this.acuerdosConformidadService.create(createDto);
  }

  @Get()
  @ApiOkResponse({
    type: [AcuerdoConformidadEntity],
  })
  findAll() {
    return this.acuerdosConformidadService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: AcuerdoConformidadEntity,
  })
  findOne(@Param('id') id: string) {
    return this.acuerdosConformidadService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: AcuerdoConformidadEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateAcuerdosConformidadDto,
  ) {
    return this.acuerdosConformidadService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: AcuerdoConformidadEntity,
  })
  remove(@Param('id') id: string) {
    return this.acuerdosConformidadService.remove(id);
  }

  @Get('/ticket/:id')
  @ApiOkResponse({
    type: AcuerdoConformidadEntity,
  })
  getByIdTicket(@Param('id') id: string) {
    return this.acuerdosConformidadService.getByIdTicket(id);
  }
}

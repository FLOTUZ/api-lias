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
import { AsesoresService } from './asesores.service';
import { CreateAsesoreDto } from './dto/create-asesore.dto';
import { UpdateAsesoreDto } from './dto/update-asesore.dto';
import { AsesorEntity } from './entities/asesore.entity';

@ApiTags('asesores')
@Controller('asesores')
export class AsesoresController {
  constructor(private readonly asesoresService: AsesoresService) {}

  @Post()
  @ApiOkResponse({
    status: 201,
    type: AsesorEntity,
  })
  create(@Body() createAsesoreDto: CreateAsesoreDto) {
    return this.asesoresService.create(createAsesoreDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [AsesorEntity],
  })
  findAll() {
    return this.asesoresService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: AsesorEntity,
  })
  findOne(@Param('id') id: string) {
    return this.asesoresService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: AsesorEntity,
  })
  update(@Param('id') id: string, @Body() updateAsesoreDto: UpdateAsesoreDto) {
    return this.asesoresService.update(id, updateAsesoreDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: AsesorEntity,
  })
  remove(@Param('id') id: string) {
    return this.asesoresService.remove(id);
  }
}

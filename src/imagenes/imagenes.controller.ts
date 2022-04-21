import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ImagenEntity } from './entities/imagene.entity';

@Controller('imagenes')
@ApiTags('imagenes')
export class ImagenesController {
  constructor(private readonly imagenesService: ImagenesService) {}

  @Post()
  @ApiOkResponse({
    status: 201,
    type: ImagenEntity,
  })
  create(@Body() createImageneDto: CreateImagenDto) {
    return this.imagenesService.create(createImageneDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [ImagenEntity],
  })
  findAll() {
    return this.imagenesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: ImagenEntity,
  })
  findOne(@Param('id') id: string) {
    return this.imagenesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: ImagenEntity,
  })
  update(@Param('id') id: string, @Body() updateImageneDto: UpdateImagenDto) {
    return this.imagenesService.update(id, updateImageneDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    type: ImagenEntity,
  })
  remove(@Param('id') id: string) {
    return this.imagenesService.remove(id);
  }
}

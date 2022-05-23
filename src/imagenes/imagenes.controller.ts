import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ImagenEntity } from './entities/imagen.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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

  @Post('upload')
  @ApiCreatedResponse()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          const extArray = file.mimetype.split('/');
          const extension = extArray[extArray.length - 1];
          cb(null, file.originalname + '_' + Date.now() + '.' + extension);
        },
      }),
      fileFilter: function (req, file, cb) {
        if (
          file.mimetype === 'image/png' ||
          file.mimetype === 'image/jpeg' ||
          file.mimetype === 'image/jpg'
        ) {
          cb(null, true);
        } else {
          cb(null, false);
        }
      },
    }),
  )
  async uploadedFile(@UploadedFile() imagen: Express.Multer.File) {
    return imagen;
  }
}

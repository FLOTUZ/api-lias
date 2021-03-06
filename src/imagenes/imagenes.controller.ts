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
  ClassSerializerInterceptor,
  BadRequestException,
} from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ImagenEntity } from './entities/imagen.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('imagenes')
@UseInterceptors(ClassSerializerInterceptor)
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
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Subir una imagen',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiCreatedResponse()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          const extArray = file.mimetype.split('/');
          const extension = extArray[extArray.length - 1];
          cb(null, Date.now() + '.' + extension);
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
    try {
      const imagenDTO = new CreateImagenDto();
      if (process.platform == 'win32') {
        imagenDTO.url = `${process.env.HOSTNAME}/${imagen.filename}`;
      }
      if (process.platform == 'linux') {
        imagenDTO.url = `${process.env.HOSTNAME}/${imagen.filename}`;
      }
      imagenDTO.descripcion = imagen.originalname;
      return await this.create(imagenDTO);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}

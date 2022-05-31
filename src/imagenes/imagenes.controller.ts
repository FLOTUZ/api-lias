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
  StreamableFile,
  Res,
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
import { join } from 'path';
import { createReadStream } from 'fs';
import { NotFoundException } from '@nestjs/common';

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
        imagenDTO.url = `${join(__dirname, '..', '..', 'uploads\\')}${
          imagen.filename
        }`;
      }
      if (process.platform == 'linux') {
        imagenDTO.url = `${join(__dirname, '..', '..', 'uploads/')}${
          imagen.filename
        }`;
      }
      imagenDTO.descripcion = imagen.originalname;
      return await this.create(imagenDTO);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //Get File from server
  @Get('uploads/:id')
  async getFile(@Res({ passthrough: true }) res, @Param('id') id: string) {
    try {
      const imagen = new ImagenEntity(await this.imagenesService.findOne(id));
      const binario = createReadStream(join(imagen.url));
      const arrName = imagen.url.split('\\');

      if (process.platform == 'linux') {
        const arrName = imagen.url.split('/');
        console.log('linux');

        const filename = join(
          __dirname,
          '..',
          '..',
          'uploads',
          arrName[arrName.length - 1],
        );
        res.set({
          'Content-Type': 'image/generic',
          'Content-Disposition': `attachment; filename=${filename}`,
        });
        return new StreamableFile(binario);
      }

      if (process.platform == 'win32') {
        console.log('windows');
        const filename =
          arrName[arrName.length - 2] + arrName[arrName.length - 1];
        res.set({
          'Content-Type': 'image/generic',
          'Content-Disposition': `attachment; filename=${filename}`,
        });
        return new StreamableFile(binario);
      }
    } catch (error) {
      console.log(error);
      throw new NotFoundException();
    }
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { AcuerdosConformidadService } from './acuerdos-conformidad.service';
import { CreateAcuerdosConformidadDto } from './dto/create-acuerdos-conformidad.dto';
import { UpdateAcuerdosConformidadDto } from './dto/update-acuerdos-conformidad.dto';
import { AcuerdoConformidadEntity } from './entities/acuerdos-conformidad.entity';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as moment from 'moment';
import { platform } from 'os';

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
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/firmas',
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
  @ApiCreatedResponse({ type: AcuerdoConformidadEntity })
  @Post(':id/acuerdo-firmado')
  async generateAcuerdoPDF(
    @Param('id') id: string,
    @UploadedFile() firma: Express.Multer.File,
    @Res() res: Response,
  ) {
    const acuerdo = (await this.acuerdosConformidadService.findOne(
      id,
    )) as AcuerdoConformidadEntity;

    let pathDocumento = '';
    try {
      fs.mkdirSync('./downloads');
    } catch (error) {}
    if (process.platform === 'win32') {
      pathDocumento = `downloads\\${Date.now()}.pdf`;
    }
    if (process.platform === 'linux') {
      pathDocumento = `downloads/${Date.now()}.pdf`;
    }

    const getHtml = async (err, html) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      page.setDefaultTimeout(10000);
      await page.setContent(html);
      await page.emulateMediaType('screen');
      await page.pdf({
        path: pathDocumento,
        format: 'LETTER',
        printBackground: true,
      });
      await browser.close();

      fs.unlinkSync(`./public/firmas/${firma.filename}`);
      res.send(html);
    };

    //Get utl environment
    const env = process.env.HOSTNAME;

    res.render(
      'acuerdo-conformidad',
      {
        env,
        expediente: 'hardcode',
        fecha: moment(acuerdo.fecha_acuerdo).format('L'),
        problema: acuerdo.descripcion_problema,
        asistencia: 'hardcode',
        direccion: acuerdo.direccion,
        asesor: 'hardcode',
        usuario: acuerdo.usuarioFinalId,
        actividades: acuerdo.actividades_realizadas,
        hora_recepcion: moment(acuerdo.hora_recepcion_servicio).format('LT'),
        hora_llegada: moment(acuerdo.hora_llegada_servicio).format('LT'),
        hora_finalizacion: moment(acuerdo.hora_finalizacion_servicio).format(
          'LT',
        ),
        observaciones: acuerdo.observaciones,
        nombre_usuario: acuerdo.usuarioFinalId,
        firma: firma.filename,
      },
      getHtml,
    );
  }
}

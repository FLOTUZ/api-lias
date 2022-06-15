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
  ApiOperation,
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
import { AcuerdoConformidadAllEntity } from './entities/acuerdos-conformidad.all.entity';

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
  @ApiOperation({
    summary: 'Obtener un acuerdo por el Id del ticket al que pertenece',
  })
  @ApiOkResponse({
    type: AcuerdoConformidadEntity,
  })
  getByIdTicket(@Param('id') id: string) {
    return this.acuerdosConformidadService.getByIdTicket(id);
  }

  @ApiOkResponse({ type: AcuerdoConformidadAllEntity })
  @ApiOperation({
    summary: 'Obtener datos de un acuerdo, además de sus nodos',
  })
  @Get('/acuerdo-conformidad/:id/all')
  getAcuerdoWithNodes(@Param('id') id: string) {
    return this.acuerdosConformidadService.getAcuerdoWithNodes(id);
  }

  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({ type: AcuerdoConformidadEntity })
  @ApiOperation({
    summary:
      'Generar un pdf firmado (este endpoint retorna el HTML del PDF generado)',
  })
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
  @Post(':id/acuerdo-firmado')
  async generateAcuerdoPDF(
    @Param('id') id: string,
    @UploadedFile() firma: Express.Multer.File,
    @Res() res: Response,
  ) {
    //Se consultan los datos del acuerdo
    const acuerdo = await this.acuerdosConformidadService.getAcuerdoWithNodes(
      id,
    );

    //Se crea el path del documento
    let pathDocumento = '';
    try {
      //Si el directorio downloads no existe, se crea 📂
      fs.mkdirSync('./downloads');
    } catch (error) {}
    //Si el sistema operativo es windows, cambian las diagonales 😪
    if (process.platform === 'win32') {
      pathDocumento = `downloads\\AC_${
        acuerdo.Ticket.num_expediente
      }_${Date.now()}.pdf`;
    }
    //Si el sistema operativo es linux, no cambian las diagonales 😉
    if (process.platform === 'linux') {
      pathDocumento = `downloads/AC_${
        acuerdo.Ticket.num_expediente
      }_${Date.now()}.pdf`;
    }

    //Se crea el PDF y se guarda con puppeteer
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

      //Se retorna el HTML del PDF
      res.send(html);
    };

    //Get hostname environment
    const env = process.env.HOSTNAME;
    //Se divide el path del documento en un array
    const arr = pathDocumento.split('\\');
    //Se obtiene el nombre del documento
    const path = arr[arr.length - 1];

    //Se gauarda la ruta del documento
    await this.acuerdosConformidadService.update(id, {
      acuerdo_firmado: `${env}/${path}`,
    });

    //Se renderea el HTML del PDF con datos del acuerdo
    res.render(
      'acuerdo-conformidad',
      {
        env,
        expediente: acuerdo.Ticket.num_expediente,
        fecha: moment(acuerdo.fecha_acuerdo).format('L'),
        problema: acuerdo.descripcion_problema,
        asistencia: acuerdo.Ticket.Asistencia.nombre,
        direccion: acuerdo.direccion,
        asesor: acuerdo.Ticket.Asesor.nombre,
        usuario: `${acuerdo.UsuarioFinal.nombre} ${acuerdo.UsuarioFinal.apellido_paterno} ${acuerdo.UsuarioFinal.apellido_materno}`,
        actividades: acuerdo.actividades_realizadas,
        hora_recepcion: moment(acuerdo.hora_recepcion_servicio).format('LT'),
        hora_llegada: moment(acuerdo.hora_llegada_servicio).format('LT'),
        hora_finalizacion: moment(acuerdo.hora_finalizacion_servicio).format(
          'LT',
        ),
        observaciones: acuerdo.observaciones,
        nombre_usuario: `${acuerdo.UsuarioFinal.nombre} ${acuerdo.UsuarioFinal.apellido_paterno} ${acuerdo.UsuarioFinal.apellido_materno}`,
        firma: firma.filename,
      },
      getHtml,
    );
  }
}

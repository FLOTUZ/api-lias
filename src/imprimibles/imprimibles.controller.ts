/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImprimiblesService } from './imprimibles.service';
import { CreateImprimibleDto } from './dto/create-imprimible.dto';
import { Response } from 'express';

import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

import { ApiBody, ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('imprimibles')
export class ImprimiblesController {
  constructor(private readonly imprimiblesService: ImprimiblesService) {}

  @Post('acuerdo')
  @ApiCreatedResponse()
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
  async generateAcuerdoPDF(
    @Res() res: Response,
    @UploadedFile() firma: Express.Multer.File,
  ) {
    const getHtml = async (err, html) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      page.setDefaultTimeout(10000);
      await page.setContent(html);
      await page.emulateMediaType('screen');
      await page.pdf({
        path: `downloads\\${Date.now()}.pdf`,
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
      { env, message: 'Hello world!', firma: firma.filename },
      getHtml,
    );
  }
}

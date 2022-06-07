import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ImprimiblesService } from './imprimibles.service';
import { CreateImprimibleDto } from './dto/create-imprimible.dto';
import { Response } from 'express';

@Controller('imprimibles')
export class ImprimiblesController {
  constructor(private readonly imprimiblesService: ImprimiblesService) {}

  @Post()
  create(@Body() createImprimibleDto: CreateImprimibleDto) {
    return this.imprimiblesService.create(createImprimibleDto);
  }

  @Get()
  root(@Res() res: Response) {
    res.header('Content-Type', 'text/html');
    return res.render('acuerdo-conformidad', {
      message: 'Hello world!',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imprimiblesService.findOne(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAcuerdosConformidadDto } from './dto/create-acuerdos-conformidad.dto';
import { UpdateAcuerdosConformidadDto } from './dto/update-acuerdos-conformidad.dto';

@Injectable()
export class AcuerdosConformidadService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateAcuerdosConformidadDto) {
    return this.prisma.acuerdoConformidad.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.acuerdoConformidad.findMany({});
  }

  findOne(id: string) {
    return this.prisma.acuerdoConformidad.findUnique({
      where: { id: Number(id) },
    });
  }

  update(id: string, updateDTO: UpdateAcuerdosConformidadDto) {
    return this.prisma.acuerdoConformidad.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.acuerdoConformidad.delete({ where: { id: Number(id) } });
  }
}

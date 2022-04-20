import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';

@Injectable()
export class CiudadesService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateCiudadDto) {
    return this.prisma.ciudad.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.ciudad.findMany({});
  }

  findOne(id: string) {
    return this.prisma.ciudad.findUnique({ where: { id: Number(id) } });
  }

  update(id: string, updateDTO: UpdateCiudadDto) {
    return this.prisma.ciudad.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.ciudad.delete({ where: { id: Number(id) } });
  }
}

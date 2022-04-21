import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImagenDto } from './dto/create-imagen.dto';
import { UpdateImagenDto } from './dto/update-imagen.dto';

@Injectable()
export class ImagenesService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateImagenDto) {
    return this.prisma.imagen.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.imagen.findMany({});
  }

  findOne(id: string) {
    return this.prisma.imagen.findUnique({ where: { id: Number(id) } });
  }

  update(id: string, updateDTO: UpdateImagenDto) {
    return this.prisma.imagen.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.imagen.delete({ where: { id: Number(id) } });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string) {
    try {
      const response = await this.prisma.imagen.findUnique({
        where: { id: Number(id) },
      });

      if (response == null) {
        return new NotFoundException(`This register did #${id} not exist`);
      } else {
        return response;
      }
    } catch (error) {
      throw new NotFoundException();
    }
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

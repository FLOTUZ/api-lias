import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuariosFinaleDto } from './dto/create-usuarios-finale.dto';
import { UpdateUsuariosFinaleDto } from './dto/update-usuarios-finale.dto';

@Injectable()
export class UsuariosFinalesService {
  constructor(private prisma: PrismaService) {}

  create(createDto: CreateUsuariosFinaleDto) {
    return this.prisma.usuarioFinal.create({ data: createDto });
  }

  findAll() {
    return this.prisma.usuarioFinal.findMany({});
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.usuarioFinal.findUnique({
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

  update(id: string, updateDTO: UpdateUsuariosFinaleDto) {
    return this.prisma.usuarioFinal.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.usuarioFinal.delete({ where: { id: Number(id) } });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuariosFinaleDto } from './dto/create-usuarios-finale.dto';
import { UpdateUsuariosFinaleDto } from './dto/update-usuarios-finale.dto';

@Injectable()
export class UsuariosFinalesService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateUsuariosFinaleDto) {
    return await this.prisma.usuarioFinal.create({ data: createDto });
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

  async update(id: string, updateDTO: UpdateUsuariosFinaleDto) {
    return await this.prisma.usuarioFinal.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  async remove(id: string) {
    return await this.prisma.usuarioFinal.delete({ where: { id: Number(id) } });
  }

  async getByTelefono(telefono: string) {
    const user = await this.prisma.usuarioFinal.findUnique({
      where: { telefono },
    });
    if (user == null) {
      throw new NotFoundException(`This register did not exist`);
    }
    return user;
  }
}

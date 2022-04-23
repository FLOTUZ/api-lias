import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateUserDto) {
    return this.prisma.usuario.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.usuario.findMany({});
  }

  async findOne(id: string) {
    const response = await this.prisma.usuario.findUnique({
      where: { id: Number(id) },
    });

    if (response == null) {
      return new NotFoundException(`This register did #${id} not exist`);
    } else {
      return response;
    }
  }

  update(id: string, updateDTO: UpdateUserDto) {
    return this.prisma.usuario.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.usuario.delete({ where: { id: Number(id) } });
  }
}

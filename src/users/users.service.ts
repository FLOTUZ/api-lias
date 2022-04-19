import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateUserDto) {
    return this.prisma.usuario.create({ data: createProductDto });
  }

  findAll() {
    return this.prisma.usuario.findMany({});
  }

  findOne(id: string) {
    return this.prisma.usuario.findUnique({ where: { id: Number(id) } });
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

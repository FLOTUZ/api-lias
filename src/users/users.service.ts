import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createDTO: CreateUserDto) {
    //Encrypt password
    createDTO.password = await argon2.hash(createDTO.password);
    return this.prisma.usuario.create({ data: createDTO });
  }

  findAll() {
    return this.prisma.usuario.findMany({
      orderBy: {
        usuario: 'asc',
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.usuario.findUnique({
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

  async update(id: string, updateDTO: UpdateUserDto) {
    //Encrypt password
    if (updateDTO.password)
      updateDTO.password = await argon2.hash(updateDTO.password);

    return await this.prisma.usuario.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.usuario.delete({ where: { id: Number(id) } });
  }

  getUserByUser(usuario: string) {
    return this.prisma.usuario.findUnique({
      where: {
        usuario: usuario,
      },
    });
  }

  updateToken(userId: string, refreshToken: string) {
    return this.prisma.usuario.update({
      where: {
        id: Number(userId),
      },
      data: {
        hashedRt: refreshToken,
      },
    });
  }
}

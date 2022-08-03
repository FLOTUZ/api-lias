import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';

@Injectable()
export class EstadosService {
  constructor(private prisma: PrismaService) {}

  async create(createDTO: CreateEstadoDto) {
    try {
      return await this.prisma.estado.create({ data: createDTO });
    } catch (error) {
      throw new ConflictException();
    }
  }

  findAll() {
    return this.prisma.estado.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.estado.findUnique({
        where: { id: Number(id) },
      });
      if (response == null) {
        throw new NotFoundException(`This register did #${id} not exist`);
      } else {
        return response;
      }
    } catch (error) {
      throw new NotFoundException();
    }
  }

  update(id: string, updateDTO: UpdateEstadoDto) {
    return this.prisma.estado.update({
      where: { id: Number(id) },
      data: updateDTO,
    });
  }

  remove(id: string) {
    return this.prisma.estado.delete({ where: { id: Number(id) } });
  }
}

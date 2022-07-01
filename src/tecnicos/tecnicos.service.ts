import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';

@Injectable()
export class TecnicosService {
  constructor(private prisma: PrismaService) {}

  create(createDTO: CreateTecnicoDto) {
    return this.prisma.tecnico.create({
      data: createDTO,
      include: { Servicio: true },
    });
  }

  findAll() {
    return this.prisma.tecnico.findMany({
      include: {
        ViveEn: {
          include: {
            Estado: true,
          },
        },
        Servicio: true,
        Ciudad: true,
      },
    });
  }

  async findOne(id: string) {
    try {
      const response = await this.prisma.tecnico.findUnique({
        where: { id: Number(id) },
        include: {
          ViveEn: true,
          Servicio: true,
          Ciudad: true,
        },
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

  update(id: string, updateDTO: UpdateTecnicoDto) {
    try {
      return this.prisma.tecnico.update({
        where: { id: Number(id) },
        data: updateDTO,
      });
    } catch (error) {
      throw new UnprocessableEntityException();
    }
  }

  remove(id: string) {
    return this.prisma.tecnico.delete({ where: { id: Number(id) } });
  }

  agregarServiciosATecnico(idTecnico: string, servicios: number[]) {
    return this.prisma.tecnico.update({
      include: { Servicio: true },
      where: { id: Number(idTecnico) },
      data: {
        Servicio: { connect: servicios.map((id) => ({ id: Number(id) })) },
      },
    });
  }

  async getServicesOfTecnico(idTecnico: string) {
    return await this.prisma.tecnico.findUnique({
      where: { id: Number(idTecnico) },
      include: { Servicio: true },
    });
  }

  async getTecnicoByUserId(id: string) {
    try {
      const response = await this.prisma.tecnico.findUnique({
        where: { usuarioId: Number(id) },
        include: {
          ViveEn: true,
          Servicio: true,
          Ciudad: true,
        },
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

  async editServicesToTecnico(id: string, servicios: number[]) {
    return await this.prisma.tecnico.update({
      where: { id: Number(id) },
      include: {
        ViveEn: {
          include: {
            Estado: true,
          },
        },
        Servicio: true,
        Ciudad: true,
      },
      data: {
        Servicio: { connect: servicios.map((id) => ({ id: Number(id) })) },
      },
    });
  }
}

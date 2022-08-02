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
      orderBy: {
        nombre: 'asc',
      },
      include: {
        ViveEn: {
          include: {
            Estado: true,
          },
        },
        Servicio: true,
        Ciudades_Cobertura: true,
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
          Ciudades_Cobertura: true,
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

  async remove(id: string) {
    return await this.prisma.tecnico.delete({ where: { id: Number(id) } });
  }

  async addAndEditServicesAndCiudadesCoberturaToTecnico(
    idTecnico: string,
    servicios: number[],
    ciudades_cobertura: number[],
  ) {
    //Se consultan el tecnico incluyendo sus servicios y ciudades de cobertura
    const tecnico = await this.prisma.tecnico.findUnique({
      where: { id: Number(idTecnico) },
      include: { Servicio: true, Ciudades_Cobertura: true },
    });

    //Se crea un arreglo solo con los ids de los servicios que se desean eliminar
    const servs_anteriores = tecnico.Servicio.map((servicio) => {
      return servicio.id;
    });

    //Se crea un arreglo solo con los ids de los Ciudades de cobertura que se desean eliminar
    const ciudades_anteriores = tecnico.Ciudades_Cobertura.map((ciudad) => {
      return ciudad.id;
    });

    //Se eliminan los servicios y Ciudades de cobertura actuales del tecnico
    await this.prisma.tecnico.update({
      where: { id: Number(idTecnico) },
      data: {
        Servicio: {
          disconnect: servs_anteriores.map((id) => ({
            id: Number(id),
          })),
        },
        Ciudades_Cobertura: {
          disconnect: ciudades_anteriores.map((id) => ({
            id: Number(id),
          })),
        },
      },
    });

    //Se agregan los servicios nuevos al tecnico
    const nuevos_servicios_ciudades = await this.prisma.tecnico.update({
      include: { Servicio: true, Ciudades_Cobertura: true },
      where: { id: Number(idTecnico) },
      data: {
        Servicio: { connect: servicios.map((id) => ({ id: Number(id) })) },
        Ciudades_Cobertura: {
          connect: ciudades_cobertura.map((id) => ({ id: Number(id) })),
        },
      },
    });

    return nuevos_servicios_ciudades;
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
          Ciudades_Cobertura: true,
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
}

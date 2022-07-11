import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsuarioEntity } from 'src/users/entities/usuario.entity';
import { CreateUsuariosFinaleDto } from './dto/create-usuarios-finale.dto';
import { UpdateUsuariosFinaleDto } from './dto/update-usuarios-finale.dto';
import { UsuarioFinalEntity } from './entities/usuario-final.entity';
import { UsuariosFinalesService } from './usuarios-finales.service';

@ApiTags('usuarios-finales')
@Controller('usuarios-finales')
export class UsuariosFinalesController {
  constructor(private readonly repository: UsuariosFinalesService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'El registro fue creado exitosamente',
    type: UsuarioFinalEntity,
  })
  @ApiOkResponse({
    type: UsuarioEntity,
  })
  async create(@Body() createDTO: CreateUsuariosFinaleDto) {
    return new UsuarioFinalEntity(await this.repository.create(createDTO));
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Se obtuvieron los datos correctamente.',
    type: [UsuarioFinalEntity],
  })
  async findAll() {
    const list = await this.repository.findAll();
    return list.map((item) => new UsuarioFinalEntity(item));
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Se obtuvo el registro correctamente.',
    type: UsuarioFinalEntity,
  })
  async findOne(@Param('id') id: string) {
    return new UsuarioFinalEntity(await this.repository.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({
    type: UsuarioFinalEntity,
    status: 200,
    description: 'Se actualizo el registro correctamente.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateDTO: UpdateUsuariosFinaleDto,
  ) {
    return new UsuarioFinalEntity(await this.repository.update(id, updateDTO));
  }

  @ApiOkResponse({
    type: UsuarioFinalEntity,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new UsuarioFinalEntity(await this.repository.remove(id));
  }

  @Get('/telefono/:telefono')
  @ApiResponse({
    status: 200,
    description: 'Se obtuvo el registro correctamente.',
  })
  @ApiOperation({
    summary: 'Obtener usuario por telefono',
  })
  async getByTelefono(@Param('telefono') telefono: string) {
    return new UsuarioFinalEntity(
      await this.repository.getByTelefono(telefono),
    );
  }
}

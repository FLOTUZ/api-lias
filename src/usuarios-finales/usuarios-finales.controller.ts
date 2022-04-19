import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioEntity } from 'src/users/entities/usuario.entity';
import { CreateUsuariosFinaleDto } from './dto/create-usuarios-finale.dto';
import { UpdateUsuariosFinaleDto } from './dto/update-usuarios-finale.dto';
import { UsuariosFinalesService } from './usuarios-finales.service';

@ApiTags('usuarios-finales')
@Controller('usuarios-finales')
export class UsuariosFinalesController {
  constructor(private readonly repository: UsuariosFinalesService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'El registro fue creado exitosamente',
  })
  @ApiOkResponse({
    type: UsuarioEntity,
  })
  create(@Body() createDTO: CreateUsuariosFinaleDto) {
    return this.repository.create(createDTO);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Se obtuvieron los datos correctamente.',
  })
  @ApiOkResponse({
    type: [UsuarioEntity],
  })
  findAll() {
    return this.repository.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Se obtuvo el registro correctamente.',
  })
  @ApiOkResponse({
    type: UsuarioEntity,
  })
  findOne(@Param('id') id: string) {
    return this.repository.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: UsuarioEntity,
  })
  @ApiResponse({
    status: 200,
    description: 'Se actualizo el registro correctamente.',
  })
  update(@Param('id') id: string, @Body() updateDTO: UpdateUsuariosFinaleDto) {
    return this.repository.update(id, updateDTO);
  }

  @ApiOkResponse({
    type: UsuarioEntity,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.remove(id);
  }
}

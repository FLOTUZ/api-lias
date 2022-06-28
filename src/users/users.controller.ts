import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsuarioEntity } from './entities/usuario.entity';
import { JwtRtGuard } from 'src/auth/guards';
import { GetCurrentUserId } from 'src/auth/decorators';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly repository: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    type: UsuarioEntity,
  })
  create(@Body() createDTO: CreateUserDto) {
    return this.repository.create(createDTO);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    type: [UsuarioEntity],
  })
  findAll() {
    return this.repository.findAll();
  }

  @ApiOkResponse({
    status: 200,
    type: UsuarioEntity,
  })
  @Get('usuario-logueado')
  @ApiBearerAuth()
  @UseGuards(JwtRtGuard)
  async whoami(@GetCurrentUserId() userId: number) {
    return new UsuarioEntity(await this.findOne(String(userId)));
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    type: UsuarioEntity,
  })
  findOne(@Param('id') id: string) {
    return this.repository.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    type: UsuarioEntity,
  })
  update(@Param('id') id: string, @Body() updateDTO: UpdateUserDto) {
    return this.repository.update(id, updateDTO);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UsuarioEntity })
  remove(@Param('id') id: string) {
    return this.repository.remove(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly repository: UsersService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'El registro fue creado exitosamente',
  })
  create(@Body() createDTO: CreateUserDto) {
    return this.repository.create(createDTO);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Se obtuvieron los datos correctamente.',
  })
  findAll() {
    return this.repository.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Se obtuvo el registro correctamente.',
  })
  findOne(@Param('id') id: string) {
    return this.repository.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Se actualizo el registro correctamente.',
  })
  update(@Param('id') id: string, @Body() updateDTO: UpdateUserDto) {
    return this.repository.update(id, updateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.remove(id);
  }
}

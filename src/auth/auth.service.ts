/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwt: JwtService) {}

  async login(loginUser: LoginUserDto) {
    const user = await this.userService.getUserByUser(loginUser.usuario);
    if (user && user.password === loginUser.password) {
      return await this.generateAccessToken(user.id, user.rol);
    }
    throw new UnauthorizedException();
  }

  async generateAccessToken(idUser: number, rolUser: string) {
    const payload = {
      sub: idUser,
      rol: rolUser,
    };

    return {
      access_token: await this.jwt.signAsync(payload),
    };
  }
}

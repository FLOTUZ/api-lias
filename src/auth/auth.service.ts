/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JWTPayload } from './interfaces/JWTPayload.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwt: JwtService) {}

  async validateUser(loginUser: LoginUserDto) {
    const user = await this.userService.getUserByUser(loginUser.usuario);
    if (user && user.password === loginUser.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async generateAccessToken(loginUser: LoginUserDto) {
    const user = await this.userService.getUserByUser(loginUser.usuario);
    const payload: JWTPayload = {
      sub: user.id,
      rol: user.rol,
    };
    return {
      access_token: this.jwt.sign(payload),
    };
  }
}

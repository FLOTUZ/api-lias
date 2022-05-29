/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwt: JwtService) {}

  async login(loginUser: LoginUserDto) {
    const user = await this.userService.getUserByUser(loginUser.usuario);
    //Se compara contrasena proveida con contrasena encriptada en la base de datos
    if (user && (await bcrypt.compare(loginUser.password, user.password))) {
      //Se genera token de acceso
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

  async logout(req: Request) {
    console.log(req.headers);

    return req.headers;
  }
}

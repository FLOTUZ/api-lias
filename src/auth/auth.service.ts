/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginUser: LoginUserDto) {
    const user = await this.userService.getUserByUser(loginUser.usuario);
    //Compare encrypted password with the login password

    if (user && (await argon2.verify(user.password, loginUser.password))) {
      //Generate a new token
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
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async logout(userId: number): Promise<boolean> {
    await this.userService.updateToken(String(userId), null);
    return true;
  }

  async refreshToken(userId: number, refreshToken: string) {
    const { sub, rol, exp }: any = this.jwtService.decode(refreshToken);

    //If exp date expire in less than 5 minutes, we generate a new token
    if (exp - Math.floor(Date.now() / 1000) < 300) {
      const newToken = await this.generateAccessToken(sub, rol);
      //Refresh token in user table
      await this.userService.updateToken(String(userId), newToken.access_token);
      return newToken;
    }
    return { access_token: refreshToken };
  }
}

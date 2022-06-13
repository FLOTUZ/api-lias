import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, JwtPayloadWithRt } from '../interfaces';
import { AuthService } from '../auth.service';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'refresh-token') {
  constructor(config: ConfigService, private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>('JWT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    //If refresh token is not valid, we throw an error
    if (!refreshToken) throw new ForbiddenException('Refresh token malformed');
    //If refresh token is valid, eject refresh token from payload
    const newToken = await this.authService.refreshToken(
      payload.sub,
      refreshToken,
    );
    console.log(newToken);

    return {
      ...payload,
      refreshToken,
    };
  }
}

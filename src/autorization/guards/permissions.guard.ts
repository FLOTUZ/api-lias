import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces';
import { Roles } from 'src/users/dto/create-user.dto';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    //Si no hay roles requeridos, se da acceso
    if (!requiredRoles) {
      return true;
    }

    //Se trae el request de la peticion
    const request = context.switchToHttp().getRequest();

    //Se trae el token de la peticion
    if (request.headers && request.headers.authorization) {
      const authorization = request.headers.authorization.split(' ')[1];
      try {
        //Se decodifica el token
        const payload: JwtPayload = new JwtService().verify(authorization, {
          secret: process.env.JWT_SECRET,
        });

        //Se compara el rol del usuario con los roles requeridos
        if (requiredRoles.some((role) => payload.rol?.includes(role))) {
          return true;
        }
        throw new UnauthorizedException('No tiene suficientes permisos');
      } catch (e) {
        throw new UnauthorizedException('No tiene suficientes permisos');
      }
    }
  }
}

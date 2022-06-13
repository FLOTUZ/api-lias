import { SetMetadata } from '@nestjs/common';

export enum Rol {
  ADMIN = 'ADMIN',
  USUARIO = 'USUARIO',
  TECNICO = 'TECNICO',
  CAPTURISTA = 'CAPTURISTA',
}

export const ROLES_KEY = 'roles';
export const AutorizedRol = (...roles: Rol[]) => SetMetadata(ROLES_KEY, roles);

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtRtGuard extends AuthGuard('refresh-token') {
  constructor() {
    super();
  }
}

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AutorizedRol, Rol } from 'src/autorization/decorators/roles.decorator';
import { AuthService } from './auth.service';
import { GetCurrentUser, GetCurrentUserId } from './decorators';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtRtGuard } from './guards';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }

  @UseGuards(JwtRtGuard)
  @ApiBearerAuth()
  @Post('logout')
  async logout(@GetCurrentUserId() userId: number) {
    return await this.authService.logout(userId);
  }

  @Post('refresh')
  @UseGuards(JwtRtGuard)
  @ApiBearerAuth()
  async refreshToken(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return await this.authService.refreshToken(userId, refreshToken);
  }

  @Get('sayhi')
  @UseGuards(JwtRtGuard)
  //@AutorizedRol(Rol.ADMIN)
  @ApiBearerAuth()
  async sayHi() {
    return 'hi';
  }
}

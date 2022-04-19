import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UsuariosFinalesModule } from './usuarios-finales/usuarios-finales.module';

@Module({
  imports: [PrismaModule, UsersModule, UsuariosFinalesModule],
})
export class AppModule {}

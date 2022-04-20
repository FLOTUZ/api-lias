import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UsuariosFinalesModule } from './usuarios-finales/usuarios-finales.module';
import { TicketsModule } from './tickets/tickets.module';
import { TecnicosModule } from './tecnicos/tecnicos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { SeguimientosModule } from './seguimientos/seguimientos.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    UsuariosFinalesModule,
    TicketsModule,
    TecnicosModule,
    ServiciosModule,
    SeguimientosModule,
  ],
})
export class AppModule {}

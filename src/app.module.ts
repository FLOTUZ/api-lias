import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UsuariosFinalesModule } from './usuarios-finales/usuarios-finales.module';
import { TicketsModule } from './tickets/tickets.module';
import { TecnicosModule } from './tecnicos/tecnicos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { ImagenesModule } from './imagenes/imagenes.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { AseguradorasModule } from './aseguradoras/aseguradoras.module';
import { CotizacionesTecnicoModule } from './cotizaciones-tecnico/cotizaciones-tecnico.module';
import { AcuerdosConformidadModule } from './acuerdos-conformidad/acuerdos-conformidad.module';
import { EstadosModule } from './estados/estados.module';
import { AsesoresModule } from './asesores/asesores.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './autorization/guards/permissions.guard';
import { AutorizationModule } from './autorization/autorization.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { TipoDeConceptosModule } from './tipo-de-conceptos/tipo-de-conceptos.module';
import { ConceptosModule } from './conceptos/conceptos.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    UsuariosFinalesModule,
    TicketsModule,
    TecnicosModule,
    ServiciosModule,
    SeguimientosModule,
    ImagenesModule,
    CiudadesModule,
    AsistenciasModule,
    AseguradorasModule,
    CotizacionesTecnicoModule,
    AcuerdosConformidadModule,
    EstadosModule,
    AsesoresModule,
    AuthModule,
    AutorizationModule,
    TipoDeConceptosModule,
    ConceptosModule,
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtService,
    },
  ],
})
export class AppModule {}

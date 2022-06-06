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
import { ImprimiblesModule } from './imprimibles/imprimibles.module';

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
    ImprimiblesModule,
  ],
})
export class AppModule {}

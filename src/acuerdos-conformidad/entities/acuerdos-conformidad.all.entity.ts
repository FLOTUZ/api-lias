import { ApiProperty } from '@nestjs/swagger';
import { AsistenciaEntity } from 'src/asistencias/entities/asistencia.entity';
import { TicketEntity } from 'src/tickets/entities/ticket.entity';
import { UsuarioFinalEntity } from 'src/usuarios-finales/entities/usuario-final.entity';
import { AcuerdoConformidadEntity } from './acuerdos-conformidad.entity';

export class AcuerdoConformidadAllEntity extends AcuerdoConformidadEntity {
  @ApiProperty({ type: UsuarioFinalEntity })
  UsuarioFinal: UsuarioFinalEntity;

  @ApiProperty({ type: TicketEntity })
  Ticket: TicketEntity;

  @ApiProperty({ type: AsistenciaEntity })
  Asistencia: AsistenciaEntity;
  constructor() {
    super();
  }
}

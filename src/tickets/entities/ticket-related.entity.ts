import { ApiProperty } from '@nestjs/swagger';
import { ServicioEntity } from 'src/servicios/entities/servicio.entity';
import { TicketEntity } from './ticket.entity';

export class TicketRelatedEntity extends TicketEntity {
  @ApiProperty({ type: [ServicioEntity] })
  Servicio: ServicioEntity[];
}

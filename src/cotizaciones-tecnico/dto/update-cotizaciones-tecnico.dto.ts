import { PartialType } from '@nestjs/swagger';
import { CreateCotizacionTecnicoDto } from './create-cotizaciones-tecnico.dto';

export class UpdateCotizacionTecnicoDto extends PartialType(
  CreateCotizacionTecnicoDto,
) {}

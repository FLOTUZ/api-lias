import { PartialType } from '@nestjs/swagger';
import { CreateAsesoreDto } from './create-asesore.dto';

export class UpdateAsesoreDto extends PartialType(CreateAsesoreDto) {}

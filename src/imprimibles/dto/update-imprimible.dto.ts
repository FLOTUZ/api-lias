import { PartialType } from '@nestjs/swagger';
import { CreateImprimibleDto } from './create-imprimible.dto';

export class UpdateImprimibleDto extends PartialType(CreateImprimibleDto) {}

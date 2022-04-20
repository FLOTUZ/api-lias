import { PartialType } from '@nestjs/swagger';
import { CreateImageneDto } from './create-imagene.dto';

export class UpdateImageneDto extends PartialType(CreateImageneDto) {}

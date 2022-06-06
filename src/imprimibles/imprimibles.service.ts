import { Injectable } from '@nestjs/common';
import { CreateImprimibleDto } from './dto/create-imprimible.dto';
import { UpdateImprimibleDto } from './dto/update-imprimible.dto';

@Injectable()
export class ImprimiblesService {
  create(createImprimibleDto: CreateImprimibleDto) {
    return 'This action adds a new imprimible';
  }

  findAll() {
    return `This action returns all imprimibles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imprimible`;
  }
}

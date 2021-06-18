import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>
  ) { }

  async create(cat: Cat) {
    const data = new Cat()
    data.name = cat.name
    data.weight = cat.weight

    return await this.catRepository.save(data)
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.find({ relations: ["metadata"] })
  }
}

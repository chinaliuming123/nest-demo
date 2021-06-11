import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(): Cat[] {
    // return this.cats
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'this is a cuustom message'
    }, HttpStatus.FORBIDDEN)
  }
}

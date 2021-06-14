import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { query, Request } from 'express';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { Cat } from './cat.entity';
import { CatsService } from './cats.service';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return await this.catsService.create(createCatDto)
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}

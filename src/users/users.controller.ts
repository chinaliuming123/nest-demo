import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CreatePhotoDto } from 'src/photos/dto/create-photo.dto';
import { Photo } from 'src/photos/photo.entity';
import { CreateUserDto } from './dto/CreateUserDto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll()
  }

  @Post()
  async create(@Body('user') user: CreateUserDto,
    @Body('cat') cat: CreateCatDto,
    @Body('photos') photos: CreatePhotoDto[]): Promise<User> {
    return await this.usersService.create(user, cat, photos)
  }
}

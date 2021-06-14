import { Body, Controller, Get, Post } from '@nestjs/common';
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
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.usersService.create(user)
  }
}

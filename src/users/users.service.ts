import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/cats/cat.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>
  ) { }

  async create(user: CreateUserDto): Promise<User> {
    const catData = new Cat()
    catData.name = 'cat2'
    catData.weight = 'weight2'


    const userData = new User()
    userData.username = user.username
    userData.password = user.password
    userData.isActive = user.isActive
    userData.cat = catData

    // 先保存cat
    await this.catsRepository.save(catData)
    // 然后保存user
    return await this.usersRepository.save(userData)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ username })
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}

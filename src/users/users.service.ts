import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/cats/cat.entity';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CreatePhotoDto } from 'src/photos/dto/create-photo.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(
    user: CreateUserDto,
    cat: CreateCatDto,
    photos: CreatePhotoDto[]): Promise<User> {
    const catData = new Cat()
    catData.name = cat.name
    catData.weight = cat.weight


    const userData = new User()
    userData.username = user.username
    userData.password = user.password
    userData.isActive = user.isActive
    userData.cat = catData
    userData.photos = photos

    // 先保存cat
    // await this.catsRepository.save(catData)
    // 然后保存user
    return await this.usersRepository.save(userData)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['cat', 'photos'] })
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ username })
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
}

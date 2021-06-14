import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/cat.entity';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Cat])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule, UsersService]
})
export class UsersModule { }

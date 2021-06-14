import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/CreateUserDto';
import { UsersService } from '../users/users.service';
import * as crypot from 'crypto'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ username, password }: CreateUserDto) {
    const data = await this.validateUser(username, password)
    const cryptoPass = crypot.pbkdf2Sync(password, '123', 10000, 16, 'sha256').toString()
    const payload = { username: data.username, userId: data.id, password: cryptoPass }
    // console.log(payload)
    return {
      token: this.jwtService.sign(payload)
    }
  }
}

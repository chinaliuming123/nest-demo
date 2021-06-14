import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() body) {
    return this.authService.login(body)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    // console.log(req.user)
    return req.user;
  }

  // @Get()
  // getHello(@Query('id', new ParseIntPipe()) id): string {
  //   return this.appService.getHello();
  // }
}

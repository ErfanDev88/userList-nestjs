import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { type User } from './interface/user.interface.js';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}

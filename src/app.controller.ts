import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { type User } from './interface/user.interface.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/app")
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Post('/app')
  addUsers(@Body() user: User): User[]{
    return this.appService.addUsers(user)
  }

  @Delete('/app/:id')
  removeUser(@Param('id') id:string): User[]{
    return this.appService.removeUser(Number(id))
  }
}

import { Injectable } from '@nestjs/common';
import { type User } from './interface/user.interface.js';

@Injectable()
export class AppService {
  user: User[] = [
    {
      id: 1,
      name: 'Erfan',
      age: 18,
    },
  ];

  getUsers(): User[] {
    return this.user;
  }

  addUsers(user: User): User[] {
    this.user.push(user)
    return this.user
  }

  removeUser(id: number): User[]{
    this.user = this.user.filter(i => i.id !== id)
    return this.user
  }
}

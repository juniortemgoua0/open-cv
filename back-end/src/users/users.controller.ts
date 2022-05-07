import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('')
  findOne() {
    return this.userService.findOne({
      email: 'junior@gmail.com',
      password: '123',
    });
  }
}

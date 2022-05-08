/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  findAll(){
    return this.userService.findAll();
  }
  @Get('/:id')
  findOne( @Param('id') id: string) {
    return this.userService.findOne(id);
  }
}

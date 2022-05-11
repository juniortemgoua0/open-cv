/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Req } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService , private jwtService: JwtService) {}

  @Get('')
  findAll(){
    return this.userService.findAll();
  }

  @Get('currentUser')
  async getCurrentUser(@Req() request: Request){
    const cookie = request.cookies['jwt'];
    if(cookie){
      const data = await this.jwtService.verifyAsync(cookie);
      return this.userService.findOne(data.id)
    }
    return undefined;
  }

  @Get('/:id')
  findOne( @Param('id') id: string) {
    return this.userService.findOne(id);
  }


}

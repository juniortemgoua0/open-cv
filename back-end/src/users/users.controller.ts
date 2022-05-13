/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Req } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  findAll(){
    return this.userService.findAll();
  }

  // @Get('currentUser')
  // async getCurrentUser(@Req() request: Request){
  //   const cookie = request.cookies['jwt'];
  //   if(cookie){
  //     const data = await this.jwtService.verifyAsync(cookie);
  //     return this.userService.findById(data.id)
  //   }
  //   return { msg: "Don't find the jwt in the cookie" };
  // }

  @Get('/:id')
  findOne( @Param('id') id: string) {
    return this.userService.findOne(id);
  }


}

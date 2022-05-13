/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req, Res, UseGuards, Request, Get } from "@nestjs/common";
import { AuthService } from './auth.service';
import { User } from "../users/user.schema";
import {  Response } from "express";
import { LocalAuthGuard } from "./local-auth.guard";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "./jwt-auth.guard";


@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post("signin")
  async signIn(@Request() req) {
    return  this.authService.login(req.user);
  }

  @Post("signup")
  signUp(@Body() user: User) {
    return this.authService.signUp(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('currentUser')
  getCurrentUser(@Request() req){
    return req.user
  }
}

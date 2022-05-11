import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "../users/user.schema";
import { Response } from "express";


@Controller("auth")
export class AuthController {
  constructor(private auth: AuthService) {
  }

  @Post("signin")
  async signIn(
    @Body() user: User,
    @Res({ passthrough: true }) response: Response
  ) {
    return  this.auth.signIn(user , response);
  }

  @Post("signup")
  signUp(@Body() user: User) {
    return this.auth.signUp(user);
  }
}

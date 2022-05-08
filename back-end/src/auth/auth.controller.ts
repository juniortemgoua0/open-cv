import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from "../users/user.schema";

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signin')
  signIn(@Body() user: User) {
    return this.auth.signIn(user);
  }

  @Post('signup')
  signUp(@Body() user: User) {
    return this.auth.signUp(user);
  }
}

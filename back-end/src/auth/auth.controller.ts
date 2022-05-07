import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto';
import { User } from "../users/user.schema";

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signin')
  signIn(@Body() dto: User) {
    return this.auth.signIn(dto);
  }

  @Post('signup')
  signUp(@Body() dto: User) {
    return this.auth.signUp(dto);
  }
}

import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signin')
  signIn(@Body() dto: SigninDto) {
    return this.auth.signIn(dto);
  }

  @Post('signup')
  async signUp(@Body() dto: SignupDto) {
    return this.auth.signUp(dto);
  }
}

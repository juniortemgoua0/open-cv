import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.auth.signIn(dto);
  }

  @Post('signup')
  signUp(@Body() dto: SignupDto) {
    return this.auth.signUp(dto);
  }
}

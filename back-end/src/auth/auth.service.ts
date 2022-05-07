import { Injectable } from '@nestjs/common';
import { SigninDto, SignupDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from "../users/user.schema";

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private UserModel: Model<UserDocument>) {}

  signIn(dto: SigninDto) {
    return { msg: 'I am sign in' };
  }

  signUp(dto: User) {
    const createUser = new this.UserModel(dto);
    return createUser.save();
  }
}

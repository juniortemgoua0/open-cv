import { Injectable } from '@nestjs/common';
import { AuthDto, SignupDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private UserModel: Model<UserDocument>) {}

  signIn(dto: AuthDto) {
    return { msg: 'I am sign in' };
  }

  async signUp(dto: SignupDto) {
    const createUser = new this.UserModel({
      ...dto,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const user = await createUser.save();
    return { userId: user._id };
  }
}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SigninDto } from '../auth/dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(dto: SigninDto): Promise<User> {
    return this.userModel.findOne({ ...dto });
  }

 
}

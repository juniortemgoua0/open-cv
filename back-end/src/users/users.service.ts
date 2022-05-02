import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';
import { AuthDto } from '../auth/dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async findOne(dto: AuthDto): Promise<IUser> {
    return this.userModel.findOne({ ...dto });
  }
}

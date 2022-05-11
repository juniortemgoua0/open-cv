/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../users/user.schema";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("User") private UserModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {
  }

  async signIn({ email, password }: User , response: Response) {
    const user = await this.UserModel.findOne({ email: email });
    if (!user) {
      return {
        msg: 'incorrect email'
      }
    }
    if (!(password === user.password)) {
      return {
        msg: 'incorrect password'
      }
    }
    const jwt = this.jwtService.signAsync({ id: user._id })
    response.cookie('jwt' , jwt , {httpOnly: true});
    return { msg : 'Success login'}
  }

  async signUp({ email, password }: User) {
    const user = await this.UserModel.findOne({ email: email });
    if (!user) {
      const createUser = new this.UserModel();
      return createUser.save();
    }
    return {
      error: {
        code: 403,
        msg: "Email must be unique"
      }
    };
  }
}

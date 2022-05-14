/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../users/user.schema";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("User") private UserModel: Model<UserDocument>,
    private jwtService: JwtService,
    private userService: UsersService,
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

  async validateUser(username: string , password: string) : Promise<any>{
    const user = await this.userService.findOne(username);
    if(user && user.password === password){
      const { password , ...result} = user;
      return result;
    }
    return null;
  }

  async login(user: any){
    const payload = {username: user.email , sub : user._id}
    return {
      access_token : this.jwtService.sign(payload)
    }
  }

  async signUp(dto: User) {
    const user = await this.UserModel.findOne({ email: dto.email });
    if (!user) {
      const createUser = new this.UserModel(dto);
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

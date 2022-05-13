/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly UserModel: Model<User>) {
  }

  findById(id: string) {
    return this.UserModel.findById(id);
  }

  async findOne(username: string){
    return this.UserModel.findOne({email:username})
  }

  findAll() {
    return this.UserModel.find();
  }
}

/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly UserModel: Model<User>) {
  }

  findOne(id: string) {
    return this.UserModel.findById(id);
  }

  findAll() {
    return this.UserModel.find();
  }
}

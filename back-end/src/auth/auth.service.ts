import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../users/user.schema";

@Injectable()
export class AuthService {
  constructor(@InjectModel("User") private UserModel: Model<UserDocument>) {
  }

  async signIn({ email, password }: User) {
    const user = await this.UserModel.findOne({ email: email, password: password });
    if (user) {
      return user._id;
    }
    return {
      error: {
        code: 404,
        msg: "incorrect password or email"
      }
    };
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

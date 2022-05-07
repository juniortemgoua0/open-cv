/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserProfile, UserProfileDocument } from "./user-profile.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument } from "src/users/user.schema";

@Injectable()
export class UserProfileServivce {

  constructor(
    @InjectModel("UserProfile") private UserProfileModel: Model<UserProfileDocument>,
    @InjectModel("User") private UserModel: Model<UserDocument>
  ) {
  }

  async createProfile(userProfile: UserProfile, id: string) {
    const createdProfile = new this.UserProfileModel(userProfile);
    const idUserProfile = (await createdProfile.save())._id;

    return this.UserModel.findByIdAndUpdate(id,
      {
        $set:
          {
            userProfile: idUserProfile,
            updatedAt: Date.now()
          }
      },
      { new: true, upsert: true }
    );
  }
}

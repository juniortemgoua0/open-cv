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

  async createProfile(userProfile: UserProfile, userId: string) {
    const createdProfile = new this.UserProfileModel(userProfile);
    const newUserProfile = await createdProfile.save()

    await this.UserModel.findByIdAndUpdate(userId,
      {
        $set:
          {
            userProfile: newUserProfile._id,
            updatedAt: Date.now()
          }
      },
      { new: true, upsert: true }
    );

    await this.UserProfileModel.findByIdAndUpdate(newUserProfile._id,
      {
        $set:
          {
            userId: (await this.UserModel.findById(userId))._id,
          }
      },
      { new: true, upsert: true }
    );

    return newUserProfile
  }

  async getUserProfile(userId: string) {
    return this.UserProfileModel.findOne().where({userId:userId})
  }
}

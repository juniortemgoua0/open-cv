/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Get } from "@nestjs/common";
import { UserProfile } from "./user-profile.schema";
import { UserProfileServivce } from "./user-profile.service";

@Controller("user-profile")
export class UserProfileController {
  constructor(private userProfileServivce: UserProfileServivce) {
  }

  @Get(":userId")
  getUserProfile(@Param("userId") userId: string) {
    return this.userProfileServivce.getUserProfile(userId)
  }

  @Post("create/:userId")
  createProfile(@Body() userProfile: UserProfile, @Param("userId") userId: string) {
    return this.userProfileServivce.createProfile(userProfile, userId);
  }

}

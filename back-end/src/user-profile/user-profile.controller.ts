/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param } from "@nestjs/common";
import { UserProfile } from './user-profile.schema';
import { UserProfileServivce } from './user-profile.service';

@Controller('user-profile')
export class UserProfileController{
    constructor(private userProfileServivce :UserProfileServivce){}

    @Post('create/:id')
    createProfile(@Body() userProfile: UserProfile, @Param('id') id:string ){
    
        return this.userProfileServivce.createProfile(userProfile , id);
    }
}
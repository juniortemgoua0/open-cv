/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserProfileSchema } from './user-profile.schema';
import { UserProfileController } from './user-profile.controller';
import { UserProfileServivce } from './user-profile.service';

@Module({
    imports:[MongooseModule.forFeature([
        { name: 'UserProfile', schema: UserProfileSchema }
         ])
    ],
    controllers:[UserProfileController],
    providers:[UserProfileServivce]
})

export class UserProfileModule {
}
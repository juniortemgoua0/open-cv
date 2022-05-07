/* eslint-disable prettier/prettier */
import {
    Injectable
} from "@nestjs/common";
import {
    UserProfile,
    UserProfileDocument
} from './user-profile.schema';
import {
    Model
} from 'mongoose';
import {
    InjectModel
} from '@nestjs/mongoose';
import { UserDocument } from "src/users/user.schema";

@Injectable()
export class UserProfileServivce {

    constructor(@InjectModel('UserProfile') private UserProfileModel: Model < UserProfileDocument > ,
    @InjectModel('User') private UserModel: Model< UserDocument >
    ) {}

    async createProfile(userProfile: UserProfile, id: string) {
        const user = await this.UserModel.findById(id)
        const profile = {
            ...userProfile,
            user: user,
        }
        const createdProfile = new this.UserProfileModel(profile);
        return createdProfile.save();
    }
}
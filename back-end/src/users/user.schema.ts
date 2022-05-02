import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserProfile } from '../user-profile/user-profile.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  createdAt: number = Date.now();

  @Prop()
  updatedAt: number = Date.now();

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile' })
  userProfile: UserProfile;
}

export const UserSchema = SchemaFactory.createForClass(User);

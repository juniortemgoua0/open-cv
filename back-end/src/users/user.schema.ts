/* eslint-disable prettier/prettier */
import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import * as mongoose from "mongoose";
import { UserProfile } from "../user-profile/user-profile.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, default: "" })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @Prop({ required: true })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: Date.now() })
  createdAt: Date;

  @Prop({ required: true, default: Date.now() })
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "UserProfile" })
  userProfile: UserProfile;
}

export const UserSchema = SchemaFactory.createForClass(User);

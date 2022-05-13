/* eslint-disable prettier/prettier */
import { JobProfile } from "src/job-profile/job-profile.schema";
import { Prop, Schema, raw, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";
import { User } from "../users/user.schema";

export type UserProfileDocument = UserProfile & Document;

@Schema()
export class UserProfile {

  // @IsNotEmpty()
  // @IsString()
  @Prop({ default: "" })
  lastname: string;

  // @IsNotEmpty()
  // @IsString()
  @Prop({ default: "" })
  firstname: string;

  // @IsNotEmpty()
  // @IsString()
  @Prop({ default: "" })
  birthday: string;


  // @IsString()
  @Prop({ default: "" })
  marital_status: string;

  // @IsNotEmpty()
  // @IsString()
  @Prop({ default: "" })
  country: string;

  // @IsNotEmpty()
  // @IsString()
  @Prop({ default: "" })
  location_city: string;

  /*@IsNotEmpty()*/
  // @IsString()
  @Prop({ default: "" })
  address: string;

  @Prop({ default: "" })
  description: string;

  @Prop(raw(
    {
      title: { type: String },
      level: { type: Number }
    }
  ))
  language: Record<string, any>[];

  @Prop({ default: [] })
  asset: [string];

  @Prop({ default: [] })
  center_of_interest: [string];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobProfile" }], default: [] })
  jobProfile: JobProfile[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  userId: User;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);

import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  username: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: Date.now() })
  createdAt: Date;

  @Prop({ required: true, default: Date.now() })
  updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserProfile {}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);

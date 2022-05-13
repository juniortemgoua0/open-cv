/* eslint-disable prettier/prettier */
import { Competence } from "./competence.schema";
import { Experience } from "./experience.schema";
import { Formation } from "./formation.schema";
import { Cv } from "../cv/cv.schema";
import { UserProfile } from "../user-profile/user-profile.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";

export type JobProfileDocument = JobProfile & Document;

@Schema()
export class JobProfile {
  @Prop()
  category: string;

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Competence'} ] ,default:[]})
  competence:Competence[];

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Experience'} ] ,default:[]})
  experience:Experience[];

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Formation'} ] ,default:[]})
  formation:Formation[];

  @Prop()
  userProfile:UserProfile;

  @Prop({type: {type:mongoose.Schema.Types.ObjectId, ref:'User'}, default:''})
  userId : UserProfile

  @Prop({type: {type:mongoose.Schema.Types.ObjectId, ref:'JobProfile'}, default:''})
  cvModel: Cv;

}

export const JobProfileSchema = SchemaFactory.createForClass(JobProfile);

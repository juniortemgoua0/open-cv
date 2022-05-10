/* eslint-disable prettier/prettier */
import { Competence } from "./competence.schema";
import { Experience } from "./experience.schema";
import { Formation } from "./formation.schema";
import { UserProfile } from "./user-profile.schema";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";

export type JobProfileDocument = JobProfile & Document;

@Schema()
export class JobProfile {
  @Prop({ required: true })
  category: string;

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Competence'} ] ,default:[]})
  competence:Competence[];

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Experience'} ] ,default:[]})
  experience:Experience[];

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Formation'} ] ,default:[]})
  formation:Formation[];

  @Prop({required:true})
  userProfile:UserProfile;
}

export const JobProfileSchema = SchemaFactory.createForClass(JobProfile);

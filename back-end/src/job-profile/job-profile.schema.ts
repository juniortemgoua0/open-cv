/* eslint-disable prettier/prettier */
import {Competence } from './competence.schema';
import{Experience} from './experience.schema';
import {Formation} from './formation.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type JobProfileDocument = JobProfile & Document;

@Schema()
export class JobProfile {
  @Prop({ required: true })
  category: string;

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Competence'}]})
  competence:Competence[];

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Experience'}]})
  experience:Experience[];

  @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Formation'}]})
  formation:Formation[];


}



export const JobProfileSchema = SchemaFactory.createForClass(JobProfile);

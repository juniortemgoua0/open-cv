/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { Realisation } from './realisation.schema';
import * as mongoose from 'mongoose';
export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience{

    @Prop({required:true})
    organisation:string;

    @Prop({required:true})
    function:string;

    @Prop( {default: ''})
    cause:string;

    @Prop({require:true})
    status:boolean;

    @Prop({required:true})
    startDate:Date;

    @Prop({required:true})
    endDate:Date;

    @Prop({default: ''})
    description:string;

    @Prop({type: [{type:mongoose.Schema.Types.ObjectId, ref:'Realisation'} ] ,default:[]})
     realisation:Realisation[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);

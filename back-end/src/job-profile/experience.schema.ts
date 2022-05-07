/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience{

    @Prop({required:true})
    organisation:string;
    
    @Prop({required:true})
    function:string;

    @Prop({require:true})
    cause:string;

    @Prop({require:true})
    status:boolean;

    @Prop({required:true})
    startDate:Date;

    @Prop({required:true})
    endDate:Date;

    @Prop({required:true})
    description:string;
    
}


export const ExperienceSchema = SchemaFactory.createForClass(Experience);
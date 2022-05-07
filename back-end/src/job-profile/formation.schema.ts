/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type FormationDocument = Formation & Document;

@Schema()
export class Formation{

    @Prop({required:true})
    school:string;

    @Prop({required:true})
    diploma:string;

    @Prop({required:true})
    fieldOfStudy:string;

    @Prop({required:true})
    startDate:Date;

    @Prop({required:true})
    endDate:Date;

    @Prop({required:true})
    obtainedResult:string;

    @Prop({required:true})
    decsription:string;
}

export const FormationSchema = SchemaFactory.createForClass(Formation);
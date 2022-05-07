/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import{Document} from 'mongoose';

export type RealisationDocument = Realisation & Document;

@Schema()
export class Realisation{
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    status:string;

    @Prop({required:true})
    startDate:Date;

    @Prop({required:true})
    endDate:Date;

    @Prop({required:true})
    creator:string

    @Prop({required:true})
    partner:string;

    @Prop({required:true})
    urlproject:string;

    @Prop({required:true})
    description:string;
}

export const RealisationSchema=SchemaFactory.createForClass(Realisation);
/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CvDocument = Cv & Document;

Schema()
export class Cv{
    @Prop({required : true, default : "" })
    image:string;

    @Prop({required : true })
    title : string;
}

export const CvSchema = SchemaFactory.createForClass(Cv);


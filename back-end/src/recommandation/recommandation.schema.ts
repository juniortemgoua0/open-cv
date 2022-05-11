/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export type RecommandationDocument = Recommandation & Document;

@Schema()
export class Recommandation{
    @IsEmail()
    @IsNotEmpty()
    @Prop({required:true})
    email:string;

    @IsString()
    @Prop({required:true})
    objet:string;

    @IsString()
    @Prop({required:true})
    description:string;

}

export const RecommandationSchema = SchemaFactory.createForClass(Recommandation);



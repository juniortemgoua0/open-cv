/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';



export type recommandationDocument = Recommandation & Document;

@Schema()
export class Recommandation{

    @IsString()
    @IsNotEmpty()
    @Prop({required:true})
    email:string;

    @IsString()
    @IsNotEmpty()
    @Prop({required:true})
    description:string;
}

export const RecommandationSchema = SchemaFactory.createForClass(Recommandation);

/* eslint-disable prettier/prettier */
import {Prop,Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type CompetenceDocument = Competence & Document;

@Schema()
export class Competence{

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    level: number;
}

export const CompetenceSchema = SchemaFactory.createForClass(Competence);
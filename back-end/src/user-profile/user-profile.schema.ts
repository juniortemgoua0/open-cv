/* eslint-disable prettier/prettier */
import { User } from './../users/user.schema';
import { JobProfile } from 'src/job-profile/job-profile.schema';
import { Prop, Schema,raw, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

 export type UserProfileDocument= UserProfile & Document;

@Schema()
export class UserProfile {

@IsNotEmpty()
@IsString()
@Prop({required:true})
lastname:string;

@IsNotEmpty()
@IsString()
@Prop({required:true})
firstname:string;

@IsNotEmpty()
@IsString()
@Prop({required:true})
birthday:string;


@IsString()
@Prop()
marital_status:string;

@IsNotEmpty()
@IsString()
@Prop({required:true,default:''})
country:string;

@IsNotEmpty()
@IsString()
@Prop({required:true,default:''})
location_city:string;

/*@IsNotEmpty()*/
@IsString()
@Prop({required:true,default:''})
addresse:string;


@Prop({default:''})
description:string;


@Prop(raw(
    {
    title:{type:String},
    level:{type:Number}
    }
))
language:Record<string,any>[];



@Prop({required:true, default:[]})
asset:[string];


@Prop({required:true,default:[]})
center_of_interest:[string];

@Prop({type:mongoose.Schema.Types.ObjectId, ref:'User'})
user: User;

@Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'JobProfile'}],default:[] })
jobprofile:JobProfile[];

}


export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);

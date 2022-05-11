/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from "@nestjs/common";
import {Cv, CvDocument } from "./cv.schema";
import { Model } from "mongoose";

@Injectable()
export class CvService{
    constructor(@InjectModel("Cv") private CvModel: Model<CvDocument>){}

    findOne(idCv: string){
        return this.CvModel.findById(idCv);
    }

    findAll() {
    return this.CvModel.find();
    }

    createCv(cv:Cv){
    const cvcreated = new this.CvModel(cv)
     return cvcreated.save();
     
    }
}

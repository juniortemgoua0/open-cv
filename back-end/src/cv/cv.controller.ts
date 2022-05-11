/* eslint-disable prettier/prettier */
import { Controller,Get, Post, Param, Body } from "@nestjs/common";
import { CvService } from "./cv.service";
import { Cv } from "./cv.schema";



@Controller("cv")
export class CvController{

    constructor(private cvService : CvService){}

    @Get('')
    findAll(){
        return this.cvService.findAll();
    }

     @Get('/:id')
    findOne(@Param('id') id: string ){
        return this.cvService.findOne(id);
    }

    @Post('create/:id')
    create(@Body() cv : Cv){
    return this.cvService.createCv(cv);

    }




}
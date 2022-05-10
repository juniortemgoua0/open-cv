/* eslint-disable prettier/prettier */

import {Global, Module } from '@nestjs/common';
import { CvSchema } from './cv.schema';
import { CvService } from './cv.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CvController } from './cv.controller';

@Global()
@Module({ 
    imports: [MongooseModule.forFeature([{name: "Cv", schema: CvSchema} ])],
    controllers: [CvController],
    providers: [CvService],
    exports: [MongooseModule]
})

export class CvModule {}

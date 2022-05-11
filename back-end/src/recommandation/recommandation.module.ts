/* eslint-disable prettier/prettier */
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { RecommandationService } from './recommandation.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RecommandationController} from './recommandation.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { RecommandationSchema } from './recommandation.schema';

@Global()
@Module({
  imports: [
      MongooseModule.forFeature([{ name: "Recommandation", schema: RecommandationSchema }]),
    
    ],

    controllers: [RecommandationController],
    providers: [RecommandationService],
    exports: [MongooseModule]
})
export class RecommandationModule {}



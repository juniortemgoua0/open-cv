/* eslint-disable prettier/prettier */

import { Body, Param, Controller, Post } from "@nestjs/common";
import { JobProfile } from "src/job-profile/job-profile.schema";
import { RecommandationService } from "./recommandation.service";

@Controller('recommandation')
export class RecommandationController {
    constructor(private readonly recommandationService: RecommandationService) {}

    @Post('send/:idJobProfile')
     sendEmail(
         @Body() body: { email: string, objet: string, description: string }, 
         @Param() id:string
         ) {
        return  this.recommandationService.sendRecommandation(body,id);
    }
}

/* eslint-disable prettier/prettier */

import { Controller, Post, Query } from "@nestjs/common";
import { RecommandationService } from "./recommandation.service";

@Controller('recommandation')
export class RecommandationController {
    constructor(private readonly recommandationService: RecommandationService) {}

    @Post('send')
     sendEmail() {
        return  this.recommandationService.sendRecommandation();
    }
}

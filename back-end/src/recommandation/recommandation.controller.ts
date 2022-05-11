/* eslint-disable prettier/prettier */

import { Controller, Post, Query } from "@nestjs/common";
import { RecommandationService } from "./recommandation.service";

@Controller('recommandation')
export class RecommandationController {
    constructor(private readonly mailService: RecommandationService) {}

    @Post('send')
    async sendEmail(@Query('email') email, @Query('description') description) {
        return await this.mailService.sendMail(email, description);
    }
}
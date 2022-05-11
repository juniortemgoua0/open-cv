/* eslint-disable prettier/prettier */
import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RecommandationService {
    constructor(private mailerService: MailerService) {}

    async sendMail(email: string, description: string) {
        console.log(email)
        await this.mailerService.sendMail({
            to: email,
            subject: 'Greeting from NestJS NodeMailer',
            template: '/email',
            context: {
                name: description
            }
        })
    }
}



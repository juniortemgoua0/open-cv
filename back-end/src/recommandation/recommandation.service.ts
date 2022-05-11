/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RecommandationService {
    constructor(private mailerService: MailerService, private configService:ConfigService) {}


  public sendRecommandation(body: { email: string, objet: string, description: string }, id:string ) {
// async..await is not allowed in global scope, must use a wrapper
   
  const MAIL_USER = this.configService.get<string>('MAIL_USER')
  const MAIL_PASSWORD = this.configService.get<string>('MAIL_PASSWORD')

    async function main() {
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      service:'gmail',
       secure: true,          //Enable implicit TLS encryption
       port    :587,
        auth: {
            user: MAIL_USER, // generated ethereal user
            pass: MAIL_PASSWORD// generated ethereal password
        },
        tls: {
   rejectUnauthorized: false
}
      

          // host: "smtp-mail.outlook.com",
          // port: 587,
          // secure: false, // true for 465, false for other ports
          // auth: {
          //   user: 'browdontemgoua0@outlook.fr', // generated ethereal user
          //   pass: 'Berbato7', // generated ethereal password
        
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <temetangcindy@gmail.com>', // sender address
        to: body.email, // list of receivers
        subject: body.objet, // Subject line
        text: body.description, // plain text body
        html: `<a>http://localhost:4200/cv-viewer${id}</a>`, // html body
      });
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
  }
}



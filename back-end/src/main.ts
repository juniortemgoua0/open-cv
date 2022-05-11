/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser())
  app.enableCors({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
  });
  await app.listen(3000);
}
bootstrap();

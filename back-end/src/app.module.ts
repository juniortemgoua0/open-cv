/* eslint-disable prettier/prettier */
import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { AuthModule } from './auth/auth.module';
import { CvModule } from './cv/cv.module';
import { ConfigModule } from '@nestjs/config';
import { JobProfileModule } from './job-profile/job-profile.module';
import { RecommandationModule } from './recommandation/recommandation.module';

@Global()
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "1d" }
    }),
    UserProfileModule,
    AuthModule,
    CvModule,
    JobProfileModule,
    RecommandationModule,
  ],
  controllers: [],
  providers: [],
  exports: [JwtModule]
})
export class AppModule {
}

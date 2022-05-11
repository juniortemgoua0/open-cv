/* eslint-disable prettier/prettier */
import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { UserProfileModule } from "./user-profile/user-profile.module";
import { AuthModule } from "./auth/auth.module";
import { CvModule } from "./cv/cv.module";
import { ConfigModule } from "@nestjs/config";
import { JobProfileModule } from "./job-profile/job-profile.module";
import { JwtModule } from "@nestjs/jwt";

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
    JobProfileModule
  ],
  controllers: [],
  providers: [],
  exports: [JwtModule]
})
export class AppModule {
}

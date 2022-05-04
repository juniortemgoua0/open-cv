import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { AuthModule } from './auth/auth.module';
import { CvModule } from './cv/cv.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://juniortemgoua05:6mIy28lGFq7qPUmV@cluster0.rvy6w.mongodb.net/opencv?retryWrites=true&w=majority',
    ),
    UserProfileModule,
    AuthModule,
    CvModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

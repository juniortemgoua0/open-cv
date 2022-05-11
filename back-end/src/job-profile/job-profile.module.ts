/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserProfileSchema } from 'src/user-profile/user-profile.schema';
import { CompetenceSchema } from './competence.schema';
import { RealisationSchema} from './realisation.schema';
import { ExperienceSchema } from './experience.schema';
import { FormationSchema } from './formation.schema';
import{JobProfileSchema} from './job-profile.schema'
import { JobProfileController } from "./job-profile.controller";
import { JobProfileService } from "./job-profile.service";

@Module({
    imports:[
        MongooseModule.forFeature([
            {name:'JobProfile',schema:JobProfileSchema},
            {name:'Competence',schema:CompetenceSchema},
            {name:'Experience',schema:ExperienceSchema},
            {name:'Formation',schema:FormationSchema},
            {name:'Realisation',schema:RealisationSchema},
            {name:'UserProfile',schema:UserProfileSchema}
        ])
    ],
  controllers: [JobProfileController],
  providers: [JobProfileService]
})
export class JobProfileModule {}

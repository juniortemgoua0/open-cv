/* eslint-disable prettier/prettier */
import {
  Injectable
} from "@nestjs/common";
import {
  InjectModel
} from "@nestjs/mongoose";
import {
  Model
} from "mongoose";
import {
  UserProfile,
  UserProfileDocument
} from './../user-profile/user-profile.schema';
import {
  JobProfile,
  JobProfileDocument
} from "./job-profile.schema";
import {
  Experience,
  ExperienceDocument
} from "./experience.schema";
import {
  Formation,
  FormationDocument
} from "./formation.schema";
import {
  Competence,
  CompetenceDocument
} from "./competence.schema";
import {
  Realisation,
  RealisationDocument
} from "./realisation.schema";

@Injectable()
export class JobProfileService {
  constructor(
    @InjectModel('UserProfile') private UserProfileModel: Model < UserProfileDocument > ,
    @InjectModel('JobProfile') private JobProfileModel: Model < JobProfileDocument > ,
    @InjectModel('Experience') private ExperienceModel: Model < ExperienceDocument > ,
    @InjectModel('Formation') private FormationModel: Model < FormationDocument > ,
    @InjectModel('Competence') private Competence: Model < CompetenceDocument > ,
    @InjectModel('Realisation') private Realisation: Model < RealisationDocument >
  ) {}

  async createJobProfile(jobProfile: JobProfile, idUser: string) {
    const createdJobProfile = new this.JobProfileModel(jobProfile);
    const idJobProfile = (await createdJobProfile.save())._id;

    return this.UserProfileModel.findByIdAndUpdate(idUser, {
      $push: {
        jobProfile: idJobProfile
      }
    }, {
      new: true,
      upsert: true
    });

  }

  /*addExperience(experience: Experience, idJobProfile: string) {
    
  }

  addFormation(formation: Formation, idJobProfile: string) {

  }

  addCompetence(competence: Competence, idJobProfile: string) {

  }

  addRealisation(realisation: Realisation, idJobProfile: string) {

  }*/



}
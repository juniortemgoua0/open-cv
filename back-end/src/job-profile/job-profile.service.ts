import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JobProfile, JobProfileDocument } from "./job-profile.schema";
import { Experience, ExperienceDocument } from "./experience.schema";
import { Formation, FormationDocument } from "./formation.schema";
import { Competence, CompetenceDocument } from "./competence.schema";
import { Realisation, RealisationDocument } from "./realisation.schema";

@Injectable()
export class JobProfileService{
  constructor(
    @InjectModel('JobProfile') private JobProfileModel: Model<JobProfileDocument>,
    @InjectModel('Experience') private ExperienceModel: Model<ExperienceDocument>,
    @InjectModel('Formation') private FormationModel: Model<FormationDocument>,
    @InjectModel('Competence') private Competence: Model<CompetenceDocument>,
    @InjectModel('Realisation') private Realisation: Model<RealisationDocument>,
  ) {}

  createJobProfile(jobProfile: JobProfile, idUser: string){
  }

  addExperience(experience: Experience, idJobProfile: string) {

  }

  addFormation(formation: Formation, idJobProfile: string) {

  }

  addCompetence(competence: Competence, idJobProfile: string) {

  }

  addRealisation(realisation: Realisation, idJobProfile: string) {

  }
}

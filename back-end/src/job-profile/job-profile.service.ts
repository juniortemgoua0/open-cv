import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JobProfile, JobProfileDocument } from "./job-profile.schema";
import { Experience, ExperienceDocument } from "./experience.schema";
import { Formation, FormationDocument } from "./formation.schema";
import { Competence, CompetenceDocument } from "./competence.schema";
import { Realisation, RealisationDocument } from "./realisation.schema";

@Injectable()
export class JobProfileService {
  constructor(
    @InjectModel("JobProfile") private JobProfileModel: Model<JobProfileDocument>,
    @InjectModel("Experience") private ExperienceModel: Model<ExperienceDocument>,
    @InjectModel("Formation") private FormationModel: Model<FormationDocument>,
    @InjectModel("Competence") private CompetenceModel: Model<CompetenceDocument>,
    @InjectModel("Realisation") private RealisationModel: Model<RealisationDocument>
  ) {
  }

  createJobProfile(jobProfile: JobProfile, idUser: string) {

  }

  async addExperience(experience: Experience, idJobProfile: string) {
    const createdExperience = new this.ExperienceModel(experience);
    const idNewExperience = (await (createdExperience.save()))._id;
    return this.JobProfileModel.findByIdAndUpdate(
      idJobProfile,
      {
        $push: { experience: idNewExperience }
      },
      { new: true, upsert: true }
    );
  }

  async addFormation(formation: Formation, idJobProfile: string) {
    const createdFormation = new this.FormationModel(formation);
    const idNewFormation = (await createdFormation.save())._id;
    return this.JobProfileModel.findByIdAndUpdate(
      idJobProfile,
      {
        $push: {
          formation: idNewFormation
        }
      },
      { new: true, upsert: true }
    );
  }

  async addCompetence(competence: Competence, idJobProfile: string) {
    const createdCompetence = new this.CompetenceModel(competence);
    const idNewCompetence = (await createdCompetence.save())._id;
    return this.JobProfileModel.findByIdAndUpdate(
      idJobProfile,
      {
        $push: {
          competence: idNewCompetence
        }
      },
      { new: true, upsert: true }
    );
  }

  addRealisation(realisation: Realisation, idJobProfile: string) {

  }

  updateExperience(experience: Experience, idJobProfile: string) {

  }

  updateFormation(formation: Formation, idJobProfile: string) {

  }

  updateCompetence(competence: Competence, idJobProfile: string) {

  }

  updateRealisation(realisation: Realisation, idJobProfile: string) {

  }
}

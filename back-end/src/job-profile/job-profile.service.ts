/* eslint-disable prettier/prettier */
import {
  Injectable
} from "@nestjs/common";
import {
  InjectModel
} from "@nestjs/mongoose";
import {
  Model, Schema
} from "mongoose";
import {
  UserProfile,
  UserProfileDocument
} from "./../user-profile/user-profile.schema";
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
    @InjectModel("UserProfile") private UserProfileModel: Model<UserProfileDocument>,
    @InjectModel("JobProfile") private JobProfileModel: Model<JobProfileDocument>,
    @InjectModel("Experience") private ExperienceModel: Model<ExperienceDocument>,
    @InjectModel("Formation") private FormationModel: Model<FormationDocument>,
    @InjectModel("Competence") private CompetenceModel: Model<CompetenceDocument>,
    @InjectModel("Realisation") private RealisationModel: Model<RealisationDocument>
  ) {
  }

  async getOneJobProfile(jobProfileId: string) {
    return  this.JobProfileModel.findById(jobProfileId).populate(['competence' , 'experience' , 'formation']).exec();
  }

  async getAllJobProfile(id: string) {
    return this.JobProfileModel.find().where({ userId: id }).populate(['experience' , 'competence', 'formation']).exec();
  }

  async createJobProfile(jobProfile: JobProfile, idUser: string) {
    const createdJobProfile = new this.JobProfileModel(jobProfile);
    const newJobProfile = await createdJobProfile.save();
    await this.UserProfileModel.findByIdAndUpdate(idUser, {
      $push: {
        jobProfile: newJobProfile
      }
    }, {
      new: true,
      upsert: true
    });
    await this.JobProfileModel.findByIdAndUpdate(newJobProfile._id, {
      $set: {
        userId: idUser
      }
    }, {
      new: true,
      upsert: true
    });
    return newJobProfile;
  }

  async addExperience(experience: Experience, idJobProfile: string) {
    const createdExperience = new this.ExperienceModel(experience);
    const newExperience = await createdExperience.save();
    return this.JobProfileModel.findByIdAndUpdate(
      idJobProfile,
      {
        $push: { experience: { ...newExperience } }
      },
      { new: true, upsert: true }
    );
  }

  async addFormation(formation: Formation, idJobProfile: string) {
    const createdFormation = new this.FormationModel(formation);
    const newFormation = await createdFormation.save();
    return this.JobProfileModel.findByIdAndUpdate(
      idJobProfile,
      {
        $push: {
          formation: { ...newFormation }
        }
      },
      { new: true, upsert: true }
    );
  }

  async addCompetence(competence: Competence, idJobProfile: string) {
    const createdCompetence = new this.CompetenceModel(competence);
    const newCompetence = await createdCompetence.save();
    return this.JobProfileModel.findByIdAndUpdate(
      idJobProfile,
      {
        $push: {
          competence: { ...newCompetence }
        }
      },
      { new: true, upsert: true }
    );
  }


  async addRealisation(realisation: Realisation, idExperience: string) {
    const createdRealisation = new this.RealisationModel(realisation);
    const idNewRealisation = (await createdRealisation.save())._id;

    return this.ExperienceModel.findByIdAndUpdate(
      idExperience,
      {
        $push: {
          realisation: idNewRealisation
        }
      },
      {
        new: true, upsert: true
      }
    );
  }

  async updateExperience(experience: Experience, idExperience: string) {
    return this.ExperienceModel.findByIdAndUpdate(
      idExperience,
      {
        $set: {
          ...experience
        }
      },
      {
        new: true, upsert: true
      }
    );
  }

  updateFormation(formation: Formation, idFormation: string) {

    return this.FormationModel.findByIdAndUpdate(
      idFormation,
      {
        $set:
          {
            ...formation
          }
      },
      { new: true, upsert: true }
    );

  }

  updateCompetence(competence: Competence, idCompetence: string) {

    return this.CompetenceModel.findByIdAndUpdate(
      idCompetence,
      {
        $set: {
          ...competence
        }
      },
      {
        new: true, upsert: true
      }
    );
  }

  updateRealisation(realisation: Realisation, idRealisation: string) {

    return this.RealisationModel.findByIdAndUpdate(
      idRealisation,
      {
        $set: {
          ...realisation
        }
      },
      {
        new: true, upsert: true
      }
    );
  }

}

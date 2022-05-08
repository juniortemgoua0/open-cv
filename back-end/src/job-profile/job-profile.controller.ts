import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { JobProfileService } from "./job-profile.service";
import { JobProfile } from "./job-profile.schema";
import { Experience } from "./experience.schema";
import { Formation } from "./formation.schema";
import { Competence } from "./competence.schema";
import { Realisation } from "./realisation.schema";

@Controller("job-profile")
export class JobProfileController {
  constructor(private jobProfileService: JobProfileService) {
  }

  @Post("create/:id-user")
  createJobProfile(
    @Body() jobProfile: JobProfile,
    @Param("id-user") idUser: string
  ) {
    return this.jobProfileService.createJobProfile(jobProfile, idUser);
  }

  @Post("add-experience/:id-job-profile")
  addExperience(
    @Body() experience: Experience,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.addExperience(experience, idJobProfile);
  }

  @Post("add-formation/:id-job-profile")
  addFormation(
    @Body() formation: Formation,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.addFormation(formation, idJobProfile);
  }

  @Post("add-competence/:id-job-profile")
  addCompetence(
    @Body() competence: Competence,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.addCompetence(competence, idJobProfile);
  }

  @Post("add-realisation/:id-job-profile")
  addRealisation(
    @Body() realisation: Realisation,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.addRealisation(realisation, idJobProfile);
  }

  @Put("update-experience/:id-job-profile")
  updateExperience(
    @Body() experience: Experience,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.updateExperience(experience, idJobProfile);
  }

  @Put("update-formation/:id-job-profile")
  updateFormation(
    @Body() formation: Formation,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.updateFormation(formation, idJobProfile);
  }

  @Put("update-competence/:id-job-profile")
  updateCompetence(
    @Body() competence: Competence,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.updateCompetence(competence, idJobProfile);
  }

  @Put("add-realisation/:id-job-profile")
  updateRealisation(
    @Body() realisation: Realisation,
    @Param("id-job-profile") idJobProfile: string
  ) {
    return this.jobProfileService.updateRealisation(realisation, idJobProfile);
  }
}

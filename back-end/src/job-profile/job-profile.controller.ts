/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
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

  @Get(':idUser')
  getAllJobProfile(@Param('idUser') id: string) {
    return this.jobProfileService.getAllJobProfile(id)
  }

  @Get('one/:jobProfileId')
  getOneJobProfile(@Param('jobProfileId') jobProfileId : string){
    return this.jobProfileService.getOneJobProfile(jobProfileId)
  }

  @Post("create/:iduser")
  createJobProfile(
    @Body() jobProfile: JobProfile,
    @Param("iduser") idUser: string
  ) {
    return this.jobProfileService.createJobProfile(jobProfile, idUser);
  }

  @Post("add-experience/:idJobProfile")
  addExperience(
    @Body() experience: Experience,
    @Param("idJobProfile") idJobProfile: string
  ) {
    return this.jobProfileService.addExperience(experience, idJobProfile);
  }

  @Post("add-formation/:idJobProfile")
  addFormation(
    @Body() formation: Formation,
    @Param("idJobProfile") idJobProfile: string
  ) {
    return this.jobProfileService.addFormation(formation, idJobProfile);
  }

  @Post("add-competence/:idJobProfile")
  addCompetence(
    @Body() competence: Competence,
    @Param("idJobProfile") idJobProfile: string
  ) {
    return this.jobProfileService.addCompetence(competence, idJobProfile);
  }

   @Post("add-realisation/:idExperience")
  addRealisation(
    @Body() realisation: Realisation,
    @Param("idExperience") idExperience: string
  ) {
    return this.jobProfileService.addRealisation(realisation, idExperience);
  }

   @Put("update-experience/:idExperience")
  updateExperience(
    @Body() experience: Experience,
    @Param("idExperience") idNewExperience: string
  ) {
    return this.jobProfileService.updateExperience(experience, idNewExperience);
  }

   @Put("update-competence/:idCompetence")
  updateCompetence(
    @Body() competence: Competence,
    @Param("idCompetence") idNewCompetence: string
  ) {
    return this.jobProfileService.updateCompetence(competence, idNewCompetence);
  }

   @Put("update-formation/:idFormation")
  updateFormation(
    @Body() formation: Formation,
    @Param("idFormation") idNewFormation: string
  ) {
    return this.jobProfileService.updateFormation(formation, idNewFormation);
  }

  @Put("update-realisation/:idRealisation")
  updateRealisation(
    @Body() realisation: Realisation,
    @Param("idRealisation") idNewRealisation: string
  ) {
    return this.jobProfileService.updateRealisation(realisation, idNewRealisation);
  }



}

import {Component, OnInit} from '@angular/core';
import {CvModel, SocialMedia} from "../../shared/cv-model";
import {Ilanguage} from "../../shared/ilanguage";
import {UserProfileService} from "../../../users/shared/user-profile.service";
import {CvTemplate} from "../../shared/interface/cv-template";
import {JobProfileService} from "../../shared/job-profile.service";
import {UserService} from "../../../users/shared/user.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-first-template',
  templateUrl: './first-template.component.html',
  styleUrls: ['./first-template.component.scss']
})
export class FirstTemplateComponent implements OnInit, CvTemplate {
  userProfile = {firstname: "Junior", lastname: "Temgoua"};
  jobProfile!: any

  constructor(
    private userProfileService: UserProfileService,
    private jobProfileService: JobProfileService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(
      url => {
        const jobProfileId = url[2].path
        this.getJobProfile(jobProfileId)
      }
    )
  }

  getJobProfile(jobProfileId: string): void {
    this.jobProfileService.getAllJobProfile(this.userService.currentUser.id).pipe(
      map((value) => {
        return value.find(v => v._id === jobProfileId)
      })
    ).subscribe(
      v => {
        this.jobProfile = v
      }
    )
  }

  getUserProfile(userId: string): void {

  }

}

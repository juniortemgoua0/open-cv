import {Component, OnInit} from '@angular/core';
import {CvModel, SocialMedia} from "../../shared/cv-model";
import {Ilanguage} from "../../shared/ilanguage";
import {UserProfileService} from "../../../users/shared/user-profile.service";
import {CvTemplate} from "../../shared/interface/cv-template";
import {JobProfileService} from "../../shared/job-profile.service";
import {UserService} from "../../../users/shared/user.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {filter, map, Observable} from "rxjs";

@Component({
  selector: 'app-first-template',
  templateUrl: './first-template.component.html',
  styleUrls: ['./first-template.component.scss']
})
export class FirstTemplateComponent implements OnInit, CvTemplate {
  userProfileId!: any;
  jobProfileId!: any;
  idInfo!: { userProfileId: string; jobProfileId: string };

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
        // this.getJobProfile(jobProfileId)
      }
    )
    console.log("userProfileId => "+ this.idInfo.userProfileId , "jobProfileId => " + this.idInfo.jobProfileId)
    this.jobProfileService.getOneJobProfile(this.idInfo.jobProfileId).subscribe({
      next: value => {
        console.log("job profile =>", value)
      },
      error: err => console.log(err)
      }
    )

    this.userProfileService.getUserProfile(this.idInfo.userProfileId).subscribe({
      next: value => {
        console.log('user profil => ' + value)
      },
      error: err => console.log(err)
    })
  }

  getJobProfile(jobProfileId: string): void {
    this.jobProfileService.getAllJobProfile(this.userService.currentUser.id).pipe(
      map((value) => {
        return value.find(v => v._id === jobProfileId)
      })
    ).subscribe(
      v => {
        console.log('job Profile',v)
        this.jobProfileId = v
      }
    )
  }

  getUserProfile(userId: string): void {

  }

}

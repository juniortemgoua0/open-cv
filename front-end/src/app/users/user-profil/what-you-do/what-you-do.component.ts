import { UserProfilComponent } from './../user-profil.component';
import { USER_TOKEN } from './../../shared/user-profile.token';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserProfileStepToken} from "../../shared/user-profile-step.token";
import { UserProfileService } from '../../shared/user-profile.service';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-what-you-do',
  templateUrl: './what-you-do.component.html',
  styleUrls: ['./what-you-do.component.scss'],
  providers : [
    {provide: UserProfileStepToken , useExisting: WhatYouDoComponent},
    {provide: USER_TOKEN , useExisting: UserProfilComponent}
  ]
})
export class WhatYouDoComponent implements OnInit{

  stateRoute: String = 'what-you-do';

  constructor(
    private route : ActivatedRoute,
    private userProfileService : UserProfileService,
    private userService : UserService,
    private userProfileComponent : UserProfilComponent,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onClick(){
     const userProfile = {
       sexe : this.userProfileComponent.userProfileInfo.sexe,
       ...this.userProfileComponent.userProfileInfo.whoAreYou,
       ...this.userProfileComponent.userProfileInfo.whatYouDo
     }
    this.userProfileService.createUserProfile(this.userService.currentUser.id,userProfile )
    //  console.log(userProfile)
    this.router.navigateByUrl('/dashboard/home')
  }


}

import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WelcomeComponent} from "./welcome/welcome.component";
import {UserProfileStepToken} from "../shared/user-profile-step.token";
import {UserProfileStepInterface} from "../shared/user-profile-step.interface";
import {UserProfileService} from "../shared/user-profile.service";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-users-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  @ViewChild('welcome', {static:true}) WelComeNav!: ElementRef<HTMLDivElement>;
  @ViewChild('who_are_you', {static:true}) WhoAreYouNav!: ElementRef<HTMLDivElement>;
  @ViewChild('what_you_do', {static:true}) WhatYoudoNav!: ElementRef<HTMLDivElement>;
  currentChildRoute!: any

  @ViewChild(UserProfileStepToken , {static: true}) stepContent!: UserProfileStepInterface

  constructor(
    private userProfileService: UserProfileService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    // this.userProfileService.createUserProfile(this.userService.currentUser.id).subscribe(
    //   v => console.log(v)
    // )
  }

  componentAdded(event: any) {
    event.route.url.subscribe((value: { path: any; }[]) => {
      value.forEach((v: { path: any; }) => {
          this.currentChildRoute = v.path
        }
      )
    })
    console.log(this.stepContent)
    this.controlNavEvolution()
  }

  controlNavEvolution(){
    switch (this.currentChildRoute){
      case 'welcome' :
        (this.WelComeNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WelComeNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        break
      case 'who-are-you':
        (this.WelComeNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WelComeNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        (this.WhoAreYouNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WhoAreYouNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        break
      case 'what-you-do':
        (this.WelComeNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WelComeNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        (this.WhoAreYouNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WhoAreYouNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        (this.WhatYoudoNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WhatYoudoNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        break
      default:
        break
    }

  }
}

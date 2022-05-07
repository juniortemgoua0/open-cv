import { NgModule } from '@angular/core';
import { UserProfilComponent } from './user-profil/user-profil.component';
import {UsersRoutingModule} from "./users-routing.module";
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import { HomeSectionOneComponent } from './home/home-section-one/home-section-one.component';
import { HomeSectionTwoComponent } from './home/home-section-two/home-section-two.component';
import { HomeSectionTreeComponent } from './home/home-section-tree/home-section-tree.component';
import { HomeSectionFourComponent } from './home/home-section-four/home-section-four.component';
import { WhoAreYouComponent } from './user-profil/who-are-you/who-are-you.component';
import { ProfileBannerComponent } from './shared/profile-banner/profile-banner.component';
import { CreateProfileComponent } from './user-profil/create-profile/create-profile.component';
import { WelcomeComponent } from './user-profil/welcome/welcome.component';
import {StepCountComponent} from "./shared/step-count/step-count.component";
import {WhatYouDoComponent} from "./user-profil/what-you-do/what-you-do.component";

@NgModule({
  declarations: [
    UserProfilComponent,
    HomeComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionTreeComponent,
    HomeSectionFourComponent,
    WhoAreYouComponent,
    ProfileBannerComponent,
    CreateProfileComponent,
    WelcomeComponent,
    WhatYouDoComponent,
    StepCountComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
  ],
  exports : []
})
export class UsersModule { }

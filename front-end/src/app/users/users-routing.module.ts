import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserProfilComponent} from "./user-profil/user-profil.component";
import {WhoAreYouComponent} from "./user-profil/who-are-you/who-are-you.component";
import {CreateProfileComponent} from "./user-profil/create-profile/create-profile.component";
import {WelcomeComponent} from "./user-profil/welcome/welcome.component";
import {WhatYouDoComponent} from "./user-profil/what-you-do/what-you-do.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: 'create-profile', component: CreateProfileComponent},
  {
    path: "user-profile",
    component: UserProfilComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'who-are-you', component: WhoAreYouComponent},
      {path: 'what-you-do', component: WhatYouDoComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}

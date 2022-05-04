import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserSigninComponent} from "./user-signin/user-signin.component";
import {UserSignupComponent} from "./user-signup/user-signup.component";
import {UserProfilComponent} from "./user-profil/user-profil.component";
import {WhoAreYouComponent} from "./user-profil/who-are-you/who-are-you.component";
import {CreateProfileComponent} from "./user-profil/create-profile/create-profile.component";
import {WelcomeComponent} from "./user-profil/welcome/welcome.component";

const  routes : Routes = [
  {path : "home" , component : HomeComponent },
  {path : "sign-in" , component : UserSigninComponent},
  {path : "sign-up" , component : UserSignupComponent},
  {
    path : "user-profile",
    children: [
      {path: '' , component: UserProfilComponent},
      {path: 'create-profile', component: CreateProfileComponent},
      {path: 'welcome' , component: WelcomeComponent},
      {path: 'qui-etes-vous' , component: WhoAreYouComponent}
    ]
  }
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule],
})
export class UserRoutingModule {}

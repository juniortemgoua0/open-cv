import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserSigninComponent} from "./user-signin/user-signin.component";
import {UserSignupComponent} from "./user-signup/user-signup.component";
import {UserProfilComponent} from "./user-profil/user-profil.component";

const  routes : Routes = [
  {path : "home" , component : HomeComponent },
  {path : "sign-in" , component : UserSigninComponent},
  {path : "sign-up" , component : UserSignupComponent},
  {path : "create-profile", component : UserProfilComponent}
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule],
})
export class UserRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import {UserRoutingModule} from "./user-routing.module";
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    UserSigninComponent,
    UserSignupComponent,
    UserProfilComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  exports : [UserRoutingModule]
})
export class UsersModule { }

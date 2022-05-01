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
import { CustomButtonComponent } from './shared/custom-button/custom-button.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    UserSigninComponent,
    UserSignupComponent,
    UserProfilComponent,
    HomeComponent,
    CustomButtonComponent,
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

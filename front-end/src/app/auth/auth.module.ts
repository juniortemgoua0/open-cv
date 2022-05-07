import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthService} from "./shared/auth.service";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: [AuthService]
})
export class AuthModule { }

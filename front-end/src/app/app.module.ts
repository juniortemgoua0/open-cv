import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersModule} from "./users/users.module";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {CvModule} from "./cv/cv.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UsersModule,
    AuthModule,
    CvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

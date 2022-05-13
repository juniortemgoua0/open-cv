import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersModule} from "./users/users.module";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {CvModule} from "./cv/cv.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./shared/jwt.interceptor";

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

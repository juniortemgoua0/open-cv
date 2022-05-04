import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from "./users/users.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhatYouDoComponent } from './users/user-profil/what-you-do/what-you-do.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatYouDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

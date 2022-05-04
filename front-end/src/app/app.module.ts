import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FirstusercreateComponent } from './firstusercreate/firstusercreate.component';
=======
import {UsersModule} from "./users/users.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhatYouDoComponent } from './users/user-profil/what-you-do/what-you-do.component';
>>>>>>> 9dc6376e48a9aea7fabe47050c7868ed66e763f6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FirstusercreateComponent
=======
    WhatYouDoComponent
>>>>>>> 9dc6376e48a9aea7fabe47050c7868ed66e763f6
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

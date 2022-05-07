import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FooterComponent,
    NavBarComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule {
}

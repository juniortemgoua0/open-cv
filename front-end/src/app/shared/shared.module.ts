import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {MaterialModule} from "../material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
    exports: [
        MaterialModule,
        FooterComponent,
        NavBarComponent,
    ]
})
export class SharedModule { }

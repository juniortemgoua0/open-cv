import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ModelPageComponent } from './model-page/model-page.component';
import { RealisationPageComponent } from './realisation-page/realisation-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import {HomeComponent} from "./home/home.component";
import {HomeSectionOneComponent} from "./home/home-section-one/home-section-one.component";
import {HomeSectionTwoComponent} from "./home/home-section-two/home-section-two.component";
import {HomeSectionTreeComponent} from "./home/home-section-tree/home-section-tree.component";
import {HomeSectionFourComponent} from "./home/home-section-four/home-section-four.component";
import { CvTemplateComponent } from './cv-template/cv-template.component';
import { CvTemplateControlDirective } from './cv-template-control.directive';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    ModelPageComponent,
    RealisationPageComponent,
    AboutPageComponent,
    HomeComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionTreeComponent,
    HomeSectionFourComponent,
    CvTemplateComponent,
    CvTemplateControlDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FooterComponent,
    NavBarComponent,
    ModelPageComponent,
    RealisationPageComponent,
    HomeComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionTreeComponent,
    HomeSectionFourComponent,
    AboutPageComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule {
}

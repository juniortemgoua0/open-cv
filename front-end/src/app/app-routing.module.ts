import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelPageComponent} from "./shared/model-page/model-page.component";
import {RealisationPageComponent} from "./shared/realisation-page/realisation-page.component";
import {AboutPageComponent} from "./shared/about-page/about-page.component";
import {HomeComponent} from "./shared/home/home.component";

const routes: Routes = [
  {path : '' , redirectTo : 'home' , pathMatch : "full"},
  {path: "home", component: HomeComponent},
  {path: 'models', component: ModelPageComponent},
  {path: 'realisation', component: RealisationPageComponent},
  {path: 'about', component: AboutPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

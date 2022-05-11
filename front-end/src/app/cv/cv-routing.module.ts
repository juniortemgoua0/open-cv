import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardHomeComponent} from "./dashboard/dashboard-home/dashboard-home.component";
import {DashboardDocumentComponent} from "./dashboard/dashboard-document/dashboard-document.component";
import {DashboardJobOfferComponent} from "./dashboard/dashboard-job-offer/dashboard-job-offer.component";
import {CvEditorComponent} from "./cv-editor/cv-editor.component";

const routes : Routes = [
  {
    path: 'dashboard' ,
    component: DashboardComponent,
    children: [
      {path: 'home' , component: DashboardHomeComponent},
      {path: 'document', component: DashboardDocumentComponent},
      {path: 'job-offer' , component: DashboardJobOfferComponent}
    ]
  },
  {path:'cv-editor' , component: CvEditorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class CvRoutingModule{

}

import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {CvRoutingModule} from "./cv-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardDocumentComponent } from './dashboard/dashboard-document/dashboard-document.component';
import { DashboardJobOfferComponent } from './dashboard/dashboard-job-offer/dashboard-job-offer.component';
import { DashboardSidebarComponent } from './shared/dashboard-sidebar/dashboard-sidebar.component';
import { CvItemComponent } from './shared/cv-item/cv-item.component';
import { CardWrapperComponent } from './shared/card-wrapper/card-wrapper.component';
import { CvEditorComponent } from './cv-editor/cv-editor.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardDocumentComponent,
    DashboardJobOfferComponent,
    DashboardSidebarComponent,
    CvItemComponent,
    CardWrapperComponent,
    CvEditorComponent
  ],
    imports: [
        SharedModule,
        CvRoutingModule,
    ]
})
export class CvModule { }

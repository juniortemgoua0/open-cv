import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {CvRoutingModule} from "./cv-routing.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardHomeComponent} from './dashboard/dashboard-home/dashboard-home.component';
import {DashboardDocumentComponent} from './dashboard/dashboard-document/dashboard-document.component';
import {DashboardJobOfferComponent} from './dashboard/dashboard-job-offer/dashboard-job-offer.component';
import {DashboardSidebarComponent} from './shared/dashboard-sidebar/dashboard-sidebar.component';
import {CvItemComponent} from './shared/cv-item/cv-item.component';
import {CardWrapperComponent} from './shared/card-wrapper/card-wrapper.component';
import {CvEditorComponent} from './cv-editor/cv-editor.component';
import {FirstTemplateComponent} from './cv-template/first-template/first-template.component';
import {EditorButtonOptionComponent} from './shared/editor-button-option/editor-button-option.component';
import {DisplayEditorOptionDirective} from './shared/display-editor-option.directive';
import {DialogEditSectionComponent} from './shared/dialog-edit-section/dialog-edit-section.component';
import {DialogAddSectionComponent} from './shared/dialog-add-section/dialog-add-section.component';
import { DialogRecommandationComponent } from './shared/dialog-recommandation/dialog-recommandation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardDocumentComponent,
    DashboardJobOfferComponent,
    DashboardSidebarComponent,
    CvItemComponent,
    CardWrapperComponent,
    CvEditorComponent,
    FirstTemplateComponent,
    EditorButtonOptionComponent,
    DisplayEditorOptionDirective,
    DialogEditSectionComponent,
    DialogAddSectionComponent,
    DialogRecommandationComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class CvModule {
}

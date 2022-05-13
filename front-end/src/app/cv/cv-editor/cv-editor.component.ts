import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FirstTemplateComponent} from "../cv-template/first-template/first-template.component";
import {CV_EDITOR_OPTION} from "../shared/editor-button-option/editor-button-option.component";
import {DialogAddSectionComponent} from "../shared/dialog-add-section/dialog-add-section.component";
import {MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog} from "@angular/material/dialog";
import {DialogEditSectionComponent} from "../shared/dialog-edit-section/dialog-edit-section.component";

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss']
})
export class CvEditorComponent implements OnInit {

  @ViewChild('cv_editor', {static: true, read: ViewContainerRef}) cv_container!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private dialog : MatDialog
  ) {
  }

  ngOnInit(): void {
    this.cv_container.clear();
    const factory = this.resolver.resolveComponentFactory(FirstTemplateComponent);
    const componentRef = this.cv_container.createComponent(factory);
    componentRef.instance.userProfile = {firstname: "Cleole" , lastname: "Wandji"};
  }

  onclick() {

  }

  createDialog(section: string, type: string){
    console.log(section , type)
    if(type === 'add'){
      const dialogRef = this.dialog.open(DialogAddSectionComponent, {
        width: '700px',
        data: {section: section, animal: type},
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }else if(type === 'edit'){
      const dialogRef = this.dialog.open(DialogEditSectionComponent, {
        width: '700px',
        data: {section: section, animal: type},
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }



  }

}

import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CV_EDITOR} from "../injection-token/cv-editor.token";
import {CvEditorComponent} from "../../cv-editor/cv-editor.component";

export enum CV_EDITOR_OPTION  {
  edit = 'EDIT',
  add = 'ADD'
}

@Component({
  selector: 'app-editor-button-option',
  templateUrl: './editor-button-option.component.html',
  styleUrls: ['./editor-button-option.component.scss'],
  providers:[
    { provide : CV_EDITOR , useExisting: CvEditorComponent }
  ]
})
export class EditorButtonOptionComponent implements OnInit {

  @Input() section : 'accroche' | 'experience' | 'realisation' | 'formation' | 'competence' | 'certification' = 'formation'

  constructor(
    public el: ElementRef,
    private cvEditor: CvEditorComponent
  ) { }

  ngOnInit(): void {
  }

  onOptionClick(type: 'add' | 'edit'){
    this.cvEditor.createDialog( this.section, type )
  }

}

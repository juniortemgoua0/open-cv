import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv-template',
  templateUrl: './cv-template.component.html',
  styleUrls: ['./cv-template.component.scss']
})
export class CvTemplateComponent implements OnInit {

  @Input() src!: string

  constructor() {
  }

  ngOnInit(): void {
  }

}

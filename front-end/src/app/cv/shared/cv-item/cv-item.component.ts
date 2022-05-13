import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.scss']
})
export class CvItemComponent implements OnInit {

  @Input() isInDashboard: boolean = false
  @Input() jobProfile! : any

  title: string = 'Developpeur web';
  lastDate: string = '1 jour';
  job: string = 'Develeppeur d\'application angular';

  constructor() { }

  ngOnInit(): void {
  }

}

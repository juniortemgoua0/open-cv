import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-step-count',
  templateUrl: './step-count.component.html',
  styleUrls: ['./step-count.component.scss']
})
export class StepCountComponent implements OnInit {

  @Input() countState!: number ;

  constructor() { }

  ngOnInit(): void {
  }
}

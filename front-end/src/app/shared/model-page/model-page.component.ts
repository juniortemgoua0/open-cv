import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss']
})
export class ModelPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(top: number) {
    document.body.scrollTo({
      top: top,
      behavior: "smooth"
    });
    document.documentElement.scrollTo({
      top: top,
      behavior: "smooth"
    });
  }
}

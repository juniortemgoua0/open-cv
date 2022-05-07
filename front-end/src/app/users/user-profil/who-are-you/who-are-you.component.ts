import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.scss']
})
export class WhoAreYouComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

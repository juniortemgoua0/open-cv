import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-what-you-do',
  templateUrl: './what-you-do.component.html',
  styleUrls: ['./what-you-do.component.scss']
})
export class WhatYouDoComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

}

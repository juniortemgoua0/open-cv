import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserProfileStepInterface} from "../../shared/user-profile-step.interface";
import {UserProfileStepToken} from "../../shared/user-profile-step.token";

@Component({
  selector: 'app-what-you-do',
  templateUrl: './what-you-do.component.html',
  styleUrls: ['./what-you-do.component.scss'],
  providers : [
    {provide: UserProfileStepToken , useExisting: WhatYouDoComponent}
  ]
})
export class WhatYouDoComponent implements OnInit, UserProfileStepInterface{

  stateRoute: String = 'what-you-do';

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  }


}

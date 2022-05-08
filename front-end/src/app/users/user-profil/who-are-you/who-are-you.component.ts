import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {UserProfileStepInterface} from "../../shared/user-profile-step.interface";
import {UserProfileStepToken} from "../../shared/user-profile-step.token";

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.scss'],
  providers: [
    { provide: UserProfileStepToken , useExisting: WhoAreYouComponent}
  ]
})
export class WhoAreYouComponent implements OnInit , UserProfileStepInterface {

  stateRoute: String = 'who-are-you';

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}

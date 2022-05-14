import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {UserProfileStepToken} from "../../shared/user-profile-step.token";
import { UserProfilComponent } from '../user-profil.component';

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.scss'],
  providers: [
    { provide: UserProfileStepToken , useExisting: WhoAreYouComponent}
  ]
})
export class WhoAreYouComponent implements OnInit  {

  stateRoute: String = 'who-are-you';

  constructor(
    private route: ActivatedRoute,
    private userProfileComponent : UserProfilComponent
    ) { }

  ngOnInit(): void {
  }

  whoAreYou = new FormGroup({
    Nom : new FormControl(''),
    Prenom : new FormControl(''),
    DateNaiss : new FormControl(''),
    StatutMatrimonial : new FormControl(''),
    Pays : new FormControl(''),
    Ville : new FormControl(''),
    Adresse : new FormControl(''),
    Description : new FormControl(''),
    Langue : new FormControl(''),
    Atouts : new FormControl('')
  }
);

onNext(){
  this.userProfileComponent.userProfileInfo.whoAreYou = this.whoAreYou.value;
}

}

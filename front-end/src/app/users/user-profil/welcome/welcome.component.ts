import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {generate} from "rxjs";
import {MatButton} from "@angular/material/button";
import {UserProfileStepInterface} from "../../shared/user-profile-step.interface";
import {UserProfileStepToken} from "../../shared/user-profile-step.token";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [
    {provide: UserProfileStepToken , useExisting: WelcomeComponent}
  ]
})
export class WelcomeComponent implements OnInit , UserProfileStepInterface {

  genre!: FormControl
  @ViewChild('man', {static: true}) man!: MatButton
  @ViewChild('woman', {static: true}) woman!: MatButton

  stateRoute: string = 'welcome'

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.genre = new FormControl(null, Validators.required)
    this.genre.valueChanges.subscribe(
      v => {
        if (v === 'homme') {
          this.woman._elementRef.nativeElement.style.border = '1px solid #ccc'
          this.man._elementRef.nativeElement.style.border = '2px solid #66A4B0'
        } else {
          this.man._elementRef.nativeElement.style.border = '1px solid #ccc'
          this.woman._elementRef.nativeElement.style.border = '2px solid #66A4B0'
        }
      }
    )
  }

  onNext() {
    console.log(this.genre.value)
  }
}

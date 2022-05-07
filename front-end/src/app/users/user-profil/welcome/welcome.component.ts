import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {generate} from "rxjs";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  genre!: FormControl
  @ViewChild('man', {static: true}) man!: MatButton
  @ViewChild('woman', {static: true}) woman!: MatButton

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

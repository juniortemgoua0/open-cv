import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {SigninDto} from "../shared/dto";

@Component({
  selector: 'app-users-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signInForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        updateOn: 'change',
      });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let dto: SigninDto = this.signInForm.value;
    this.authService.signIn(dto)
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import { SignupDto} from "../shared/dto";

@Component({
  selector: 'app-users-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      {
        updateOn: 'change',
      }
    )

    this.signUpForm.valueChanges.subscribe(
      value => {
        if (value.confirmPassword !== value.password) {
          this.signUpForm.value.confirmPassword.invalid
        } else {

        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
      throw new Error('invalid password')
    } else {
      let dto: SignupDto = {
        username: this.signUpForm.value.username,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password
      }
      this.authService.signUp(dto)
    }

  }
}

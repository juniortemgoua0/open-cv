import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SigninDto, SignupDto} from "./dto";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  signIn(dto: SigninDto) {
    this.http.post('http://localhost:3000/auth/signin' , dto).subscribe(
      value => {
        console.log(value);
      }
    );
  }

  signUp(dto: SignupDto) {
    this.http.post('http://localhost:3000/auth/signup' , dto).subscribe(
      value => {
        console.log(value);
      }
    );
  }
}

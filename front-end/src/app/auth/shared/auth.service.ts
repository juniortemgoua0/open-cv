import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SigninDto, SignupDto} from "./dto";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogging: boolean = false

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.http.get<any>('http://localhost:3000/users/currentUser').subscribe(
      {
        next: (v) => {
          if (v) {
            this.isLogging = true
            console.log(v)
          }
        },
        error: err => {
          alert('Connexion error')
        }
      }
    )
    // console.log('construct')
  }

  signIn(dto: SigninDto): Subscription {
    return this.http.post<any>('http://localhost:3000/auth/signin', dto).subscribe(
      {
        next: (value: { msg: string }) => {
          if (value.msg.includes('password')) {
            console.log('Mot de passe incorrect')
          } else if (value.msg.includes('email')) {
            console.log('Email incorrect')
          } else if (value.msg.includes('login')) {
            console.log('Connexion reussie avec succes')
            this.isLogging = true
            window.setTimeout(() => {
              this.router.navigateByUrl('/create-profile')
            }, 2000)
          }
        },
        error: (err) => {
          alert('Erreur de connexion connixion server')
        }
      }
    );
  }

  signUp(dto: SignupDto) {
    this.http.post('http://localhost:3000/auth/signup', dto).subscribe(
      value => {
        console.log(value);
      }
    );
  }
}

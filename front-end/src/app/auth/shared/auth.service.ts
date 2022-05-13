import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SigninDto, SignupDto} from "./dto";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../users/shared/user.service";
import {User} from "../../cv/shared/interface";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  _isLogging : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isLogging : Observable<boolean> = this._isLogging.asObservable()

  _currentUser: BehaviorSubject<User> = new BehaviorSubject<User>({email: "", id: ""})
  $currentUser: Observable<User> = this._currentUser.asObservable()

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    this.verifyAuthentication()
  }

  verifyAuthentication() {
    return this.http.get<any>('http://localhost:3000/auth/currentUser').subscribe(
      {
        next: (v: User) => {
          if (v.id) {
            console.log(v)
            this._currentUser.next(v)
            this.userService.getCurrentUser(this.$currentUser)
            this._isLogging.next(true)
          }
        },
        error: err => {
          alert('Connexion error')
          console.log(err)
        }
      }
    )
  }

  signIn(dto: SigninDto): Subscription {
    return this.http.post<any>('http://localhost:3000/auth/signin', dto).subscribe(
      {
        next: (value) => {
          if (value.access_token) {
            console.log("User is connected")
            localStorage.setItem('jwt', value.access_token)
            this.router.navigateByUrl('/create-profile')
          }
        },
        error: (err) => {
          console.log(err)
          alert('incorrect email ou password')
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

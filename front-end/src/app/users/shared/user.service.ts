import {Injectable} from "@angular/core";
import {AuthService} from "../../auth/shared/auth.service";
import {User} from "../../cv/shared/interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn : "root"
})
export  class UserService {

  currentUser!: User

  constructor() {}

  getCurrentUser($currentUser : Observable<User>){
    $currentUser.subscribe(
      v => this.currentUser = v
    )
  }

}

import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/shared/auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    private userService : UserService,
    private authService : AuthService,
    private http : HttpClient
  ) { }

  getUserProfile(){
    return this.http.get<any>('https://localhost:3000/user-profile/')
  }

  createUserProfile(userId: string): Observable<any>{
     return this.http.post<any>('http://localhost:3000/user-profile/create/'+ userId , {})
  }
}

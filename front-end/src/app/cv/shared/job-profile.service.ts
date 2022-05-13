import {Injectable} from '@angular/core';
import {UserService} from "../../users/shared/user.service";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {AuthService} from "../../auth/shared/auth.service";

@Injectable({
  providedIn: 'root'
})
export class JobProfileService {

  _jobProfiles: BehaviorSubject<any[]> = new BehaviorSubject<any>(null);
  $jobProfiles: Observable<any[]> = this._jobProfiles.asObservable()

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) {
  }


  getAllJobProfile(userId: string): Observable<any[]> {
    this.http.get<any[]>("http://localhost:3000/job-profile/" + userId).subscribe(
      jobProfiles => {
        this._jobProfiles.next(jobProfiles)
      }
    )
    return this.$jobProfiles
  }

  createJobProfile(userId: string) {
    return this.http.post<any>('http://localhost:3000/job-profile/create/' + userId, {}).pipe(
      map((value) => value._id
      )
    )
  }
}

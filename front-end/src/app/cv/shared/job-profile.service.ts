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
  $jobProfiles: Observable<any[]> = this._jobProfiles.asObservable();

  _jobProfile: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  $jobProfile: Observable<any> = this._jobProfile.asObservable();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) {
  }

  getOneJobProfile(jobProfileId: string){
    this.$jobProfile = this.http.get<any>('http://localhost:3000/job-profile/one/'+jobProfileId);
    return this.$jobProfile
  }

  getAllJobProfile(userId: string): Observable<any[]> {
    this.http.get<any[]>("http://localhost:3000/job-profile/" + userId).subscribe(
      jobProfiles => {
        console.log(jobProfiles)
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

  addExperience(currentJobProfileId: string, value: any) {
    console.log(currentJobProfileId , value)
    this.http.post<any>('http://localhost:3000/job-profile/add-experience/'+currentJobProfileId , value).subscribe(
      {
        next: v => this._jobProfile.next(v),
        error: err => console.log(err)
      }
    )
  }

  addFormation(currentJobProfileId: string, value: any) {
    console.log(currentJobProfileId , value)
    this.http.post<any>('http://localhost:3000/job-profile/add-formation/'+currentJobProfileId , value).subscribe(
      {
        next: v => this._jobProfile.next(v),
        error: err => console.log(err)
      }
    )
  }

  addCompetence(currentJobProfileId: string, value: any) {
    console.log(currentJobProfileId , value)
    this.http.post<any>('http://localhost:3000/job-profile/add-competence/'+currentJobProfileId , value).subscribe(
      {
        next: v => this._jobProfile.next(v),
        error: err => console.log(err)
      }
    )
  }

  addAccroche(currentJobProfileId: string, value: any) {
    // this.http.post<any>('http://localhost:3000/job-profile/add-accroche' , )
  }
}

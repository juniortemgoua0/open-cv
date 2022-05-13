import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {JobProfileService} from "../job-profile.service";
import {UserService} from "../../../users/shared/user.service";

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {

  constructor(
    private jobService: JobProfileService,
    private userService: UserService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.url[1].path === 'create') {
      const jobProfileId = this.jobService.createJobProfile(this.userService.currentUser.id).subscribe(
        v => {
          console.log(v)
          return this.router.navigateByUrl('/cv-editor/edit/' + v)
        }
      )
    }
    return false;
  }

}

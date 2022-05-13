import { UserProfile } from './../../../../../back-end/src/user-profile/user-profile.schema';
import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn : "root"
})
export  class UserProfileServivce {

 userProfiles !: UserProfile;

  constructor(private httpClient :HttpClient) {
    
  }


  insert(newUserProfile:UserProfile){




  }

}

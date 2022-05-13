import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {JobProfileService} from "../../shared/job-profile.service";
import {UserService} from "../../../users/shared/user.service";

@Component({
  selector: 'app-dashboard-document',
  templateUrl: './dashboard-document.component.html',
  styleUrls: ['./dashboard-document.component.scss']
})
export class DashboardDocumentComponent implements OnInit {

  jobProfiles!: Observable<any[]>

  constructor(
    private jobProfileService : JobProfileService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.jobProfiles = this.jobProfileService.getAllJobProfile(this.userService.currentUser.id)
  }

}

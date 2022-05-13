import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/shared/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLogging!: Observable<boolean> ;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogging = this.authService.isLogging
  }

}

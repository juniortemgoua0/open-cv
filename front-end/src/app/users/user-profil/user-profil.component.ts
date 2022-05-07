import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WelcomeComponent} from "./welcome/welcome.component";

@Component({
  selector: 'app-users-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  @ViewChild('welcome', {static:true}) WelComeNav!: ElementRef<HTMLDivElement>;
  @ViewChild('who_are_you', {static:true}) WhoAreYouNav!: ElementRef<HTMLDivElement>;
  @ViewChild('what_you_do', {static:true}) WhatYoudoNav!: ElementRef<HTMLDivElement>;
  currentChildRoute!: any

  constructor() {
  }

  ngOnInit(): void {
  }

  componentAdded(event: any) {
    event.route.url.subscribe((value: { path: any; }[]) => {
      value.forEach((v: { path: any; }) => {
          this.currentChildRoute = v.path
        }
      )
    })
    this.controlNavEvolution()
  }

  controlNavEvolution(){
    switch (this.currentChildRoute){
      case 'welcome' :
        (this.WelComeNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WelComeNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        break
      case 'who-are-you':
        (this.WelComeNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WelComeNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        (this.WhoAreYouNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WhoAreYouNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        break
      case 'what-you-do':
        (this.WelComeNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WelComeNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        (this.WhoAreYouNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WhoAreYouNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        (this.WhatYoudoNav.nativeElement.children[1] as HTMLDivElement).style.width = 'inherit';
        (this.WhatYoudoNav.nativeElement.children[0] as HTMLButtonElement).classList.remove('text-black-50');
        break
      default:
        break
    }

  }
}

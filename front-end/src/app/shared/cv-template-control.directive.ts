import {Directive, ElementRef, HostListener, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Directive({
  selector: '[appCvTemplateControl]'
})
export class CvTemplateControlDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') mouseEnter(){
    ( this.el.nativeElement.children[0] as HTMLDivElement).style.display = "block" as string
    ( this.el.nativeElement.children[1] as HTMLImageElement).style.transform = "scale(1.1)" as string
    ( this.el.nativeElement.children[2] as HTMLButtonElement).style.bottom = '30px'

  }
  @HostListener('mouseleave') mouseLeave() {
    ( this.el.nativeElement.children[0] as HTMLDivElement).style.display = "none" as string
    ( this.el.nativeElement.children[1] as HTMLImageElement).style.transform = "scale(1)" as string
    ( this.el.nativeElement.children[2] as HTMLButtonElement).style.bottom = '-60px'
  }


}

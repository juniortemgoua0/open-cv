import {ContentChild, Directive, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {EditorButtonOptionComponent} from "./editor-button-option/editor-button-option.component";

@Directive({
  selector: '[appDisplayEditorOption]'
})
export class DisplayEditorOptionDirective implements OnInit{

  constructor(private el : ElementRef) { }

  @ContentChild(EditorButtonOptionComponent , {static : true}) editorButton!: EditorButtonOptionComponent

  @HostListener('mouseenter') onMouseEnter(){
    (this.editorButton.el.nativeElement.children[0] as HTMLDivElement).classList.remove('d-none')
  }
  @HostListener('mouseleave') onMouseLeave(){
    (this.editorButton.el.nativeElement.children[0] as HTMLDivElement).classList.add('d-none')
  }

  ngOnInit(): void {
    // this.editorButton.
  }



}

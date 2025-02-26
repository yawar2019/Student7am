import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppHighlighttextDirective]'
})
export class AppHighlighttextDirectiveDirective implements OnInit {

  constructor(private element:ElementRef) { }
  ngOnInit(): void {
 (this.element.nativeElement as HTMLElement).style.backgroundColor="gray";
  }

}

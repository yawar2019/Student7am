import { Directive, ElementRef, OnInit, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appAppRedHighlightTextcolor]'
})
export class AppRedHighlightTextcolorDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
   this.renderer.setStyle(this.element.nativeElement,"color","green");
  }

  @HostListener('mouseenter')
  onmouseenter(event:Event)
  {
   this.renderer.setStyle(this.element.nativeElement,"color","yellow");

  }


  @HostListener('mouseleave')
  onmouseleave(event:Event)
  {
   this.renderer.setStyle(this.element.nativeElement,"color","Blue");

  }


}

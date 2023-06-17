import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'purple';
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'initial';
  }

  

}

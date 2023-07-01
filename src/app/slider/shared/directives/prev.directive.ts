import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('click') clicking(){
    let elem = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elem.getElementsByClassName("item");
    elem.prepend(item[item.length -1]);
  }

  @HostListener('wheel') scrolling(){
    let elem = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elem.getElementsByClassName("item");
    elem.prepend(item[item.length -1]);
  }
}

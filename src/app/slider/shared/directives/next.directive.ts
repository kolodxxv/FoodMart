import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(
    private el: ElementRef
  ) { }

   @HostListener('click') clicking(){
    let elem = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elem.getElementsByClassName("item");
    elem.append(item[0]);
   }
   
   @HostListener('wheel') scrolling(){
    let elem = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elem.getElementsByClassName("item");
    elem.append(item[0]);
   }

   @HostListener('keydown') onKeyDown(e: any) {
    if (e.keyCode == 39) {
      let elem = this.el.nativeElement.parentElement.parentElement.children[0];
      let item = elem.getElementsByClassName("item");
      elem.append(item[0]);
    }
   }

}

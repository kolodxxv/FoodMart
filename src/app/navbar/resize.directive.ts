import { Directive, HostListener, Output, ElementRef, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  innerWidth: any;

  constructor() {
    this.innerWidth = window.innerWidth;
   }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    
  }

  // @Output() appResize = new EventEmitter<string>();

  // constructor(private el: ElementRef) {}

  // @HostListener('window:resize', ['$event'])onResize(event:any) {
  //   const windowWidth = event.target.innerWidth;
  //   if (windowWidth < 768) {
  //     this.appResize.emit('small');
  //   } else if (windowWidth >= 768 && windowWidth < 992) {
  //     this.appResize.emit('medium');
  //   } else {
  //     this.appResize.emit('large');
  //   }
  // }


}

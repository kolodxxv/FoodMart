import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('click')onClick() {
    this.backgroundColor = 'purple';
  }

}

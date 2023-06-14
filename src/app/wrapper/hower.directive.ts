import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHower]'
})
export class HowerDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('click')onClick() {
    this.backgroundColor = 'purple';
  }

}

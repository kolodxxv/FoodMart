import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  

  public responsive!: boolean;

  constructor(
    private observer: BreakpointObserver
    ) {}

  

  ngAfterViewInit() {
    setTimeout(() => {
    this.observer.observe(['(max-width: 900px)']).subscribe((res) => {
      if (res.matches) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    })
  })
  }
   
}

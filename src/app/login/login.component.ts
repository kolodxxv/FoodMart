import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  hide = true;
  constructor(private elementRef: ElementRef) {

  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'silver';
  }

  ngOnDestroy(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }
}

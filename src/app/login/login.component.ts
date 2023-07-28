import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from './shared/login.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  hide = true;

  public loginForm: FormGroup = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder,
    private router: Router, 
    private location: Location,
    private loginSrvc: LoginService
    
    ) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'silver';
  }

  ngOnDestroy(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  public onSubmit(): void {
    const { username, password } = this.loginForm.controls;

    if (this.loginSrvc.checkUserCredentials(username.value, password.value)) {
      this.loginSrvc.storeUserName(username.value)
      console.log(username)
      this.location.back()
      this.loginForm.reset()
    }
  }

}

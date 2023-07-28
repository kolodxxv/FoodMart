import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'
import { Store } from '@ngrx/store';
import { selecCountProducts, selectTotalPrice } from '../cart/store/selectors';

import { SearchService } from '../shared/search.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Search bar value
  inputValue!: string;

  public responsive!: boolean;
  public isShowing!: boolean;
 

  public countProducts$: Observable<number>;
  public totalPrice$: Observable<number>;
  public currentUser = localStorage.getItem('username')

  constructor(
    private observer: BreakpointObserver,
    public router: Router,
    private store: Store,
    private searchSrvc: SearchService,
    private fb: FormBuilder
    ) {
      this.countProducts$ = store.select(selecCountProducts);
      this.totalPrice$ = this.store.select(selectTotalPrice)
    }

    public redirectByEventType(url: string): void {
      this.router.navigate([`/${url}`])
    }
  

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

  logoutUser() {
    localStorage.removeItem('username')
    location.reload()
  }

  search() {
    this.searchSrvc.setInputValue(this.inputValue)
  }

}

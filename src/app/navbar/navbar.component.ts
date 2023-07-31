import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { selecCountProducts, selectTotalPrice } from '../cart/store/selectors';
import { SearchService } from '../shared/search.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MapsComponent } from './maps/maps.component';
import { DialogConfig } from '@angular/cdk/dialog';


@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Search bar value
  public inputValue!: string;
  // Transition between views
  public responsive!: boolean;
  public isShowing!: boolean;
  // Data 
  public countProducts$: Observable<number>;
  public totalPrice$: Observable<number>;
  public currentUser = localStorage.getItem('username');
  

  constructor(
    private observer: BreakpointObserver,
    public router: Router,
    private store: Store,
    private searchSrvc: SearchService,
    private dialog: MatDialog

    ) {
      this.countProducts$ = store.select(selecCountProducts);
      this.totalPrice$ = this.store.select(selectTotalPrice);
     
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

  openDialog(){
    const dialogCongif = new MatDialogConfig();
    dialogCongif.position = { top: '0px'}
    this.dialog.open(MapsComponent);
  }

}

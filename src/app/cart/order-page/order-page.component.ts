import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from '../store/actions';
import { selecCountProducts, selectAllProducts, selectGroupedCartEntries, selectTotalPrice } from '../store/selectors';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {

  cartEntries$: Observable<any>;
  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;
  allProds$: Observable<any>;

  constructor(
    private store: Store,
    private router: Router,
    private location: Location
  ) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    this.countProducts$ = store.select(selecCountProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice)
    this.allProds$ = this.store.select(selectAllProducts)
  }

  public redirectByEventType(url: string): void {
    this.router.navigate([`/${url}`])
  }

  public redirectBack(): void {
    this.location.back()
  }
}

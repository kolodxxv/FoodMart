import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { clearCart, RemoveProduct, addProduct, RemoveAll } from '../store/actions';
import { selecCountProducts, selectAllProducts, selectGroupedCartEntries, selectTotalPrice } from '../store/selectors';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {

  public currentUser = localStorage.getItem('username')

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
    this.totalPrice$ = this.store.select(selectTotalPrice);
    this.allProds$ = this.store.select(selectAllProducts);
  }

  public addSome(entry: any) {
    this.store.dispatch(addProduct(entry.product))
  }

  public removeSome(entry: any) {
    this.store.dispatch(RemoveProduct(entry.product))
  }

  public removeProd(entry: any) {
    this.store.dispatch(RemoveAll(entry.product))
  }

  public clearCart() {
    this.store.dispatch(clearCart())
  }

  public redirectByEventType(url: string): void {
    this.router.navigate([`/${url}`])
  }

  public redirectBack(): void {
    this.location.back()
  }

 
}

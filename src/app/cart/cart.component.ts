import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from './store/actions';
import { selecCountProducts, selectTotalPrice } from './store/selectors';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartEntries$: Observable<any>;
  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(
    private store: Store,
    private router: Router
    ) {
    this.cartEntries$ = new Observable();
    this.countProducts$ = store.select(selecCountProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice)
  }

  clearEntries () {
    this.store.dispatch(clearCart())
  }

  public redirectByEventType(url: string): void {
    this.router.navigate([`/${url}`])
  }

}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from './store/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartEntries$: Observable<any>

  constructor(private store: Store) {
    this.cartEntries$ = new Observable();
  }

  clearEntries () {
    this.store.dispatch(clearCart())
  }

}

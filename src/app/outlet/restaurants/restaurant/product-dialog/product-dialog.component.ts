import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Menu } from '../../shared/models/menu-model';
import { sample_menu } from '../../shared/data';
import { addProduct } from 'src/app/cart/store/actions';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    public dialogRef: MatDialogRef<ProductDialogComponent>
    ) { }

  public productAmount: number = 1;
  public price: number = parseInt(this.data.context.price);

  public products(): Menu[] {
    return sample_menu
  }

  public buyProduct(product: Menu) {
    this.store.dispatch(addProduct(product))
    this.dialogRef.close()
  }
  
  Minus() {
    this.productAmount --;
  }

  plus() {
    this.productAmount ++;
  }
  


 
}

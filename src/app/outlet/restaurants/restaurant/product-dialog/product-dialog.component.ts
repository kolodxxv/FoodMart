import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/cart/store/actions';

import { MenuModel } from 'src/app/shared/models/menu-model';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private dataService: DataService
    ) { }

  public productAmount: number = 1;
  public price: number = parseInt(this.data.price);
  public menu_srv: any;

  public products(): MenuModel[] {
    this.dataService.getMenu().subscribe(res => {
      this.menu_srv = res;
    })
    return this.menu_srv
  }

  public buyProduct(product: MenuModel) {
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

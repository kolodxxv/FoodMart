import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [
    CartComponent,
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }

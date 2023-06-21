import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ShopsComponent } from './shops/shops.component';
import { RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { ShopComponent } from './shops/shop/shop.component';




@NgModule({
  declarations: [
    RestaurantsComponent,
    ShopsComponent,
    RestaurantComponent,
    ShopComponent,
    
   
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OutletModule { }

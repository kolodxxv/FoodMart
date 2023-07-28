import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ShopsComponent } from './shops/shops.component';
import { RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { ShopComponent } from './shops/shop/shop.component';
import { NavbarModule } from '../navbar/navbar.module';
import { TypeFilterComponent } from './type-filter/type-filter.component';
import { ProductDialogComponent } from './restaurants/restaurant/product-dialog/product-dialog.component';
import { SearchComponent } from './search/search.component';

import { MatDialogModule } from '@angular/material/dialog'
import { CartModule } from '../cart/cart.module';
import { FooterModule } from '../footer/footer.module';
import { SearchService } from '../shared/search.service';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    MatDialogModule,
    FooterModule,
    CartModule
  ],
  exports: [
    RestaurantsComponent, 
    RestaurantComponent, 
    ShopsComponent,
    ShopComponent],
  declarations: [
    RestaurantsComponent,
    ShopsComponent,
    RestaurantComponent,
    ShopComponent,
    TypeFilterComponent,
    ProductDialogComponent,
    SearchComponent
  ],
  providers: [SearchService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OutletModule { }

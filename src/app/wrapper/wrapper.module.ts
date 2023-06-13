import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';

import { SliderModule } from '../slider/slider.module';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { ShopsModule } from '../shops/shops.module';




@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    SliderModule,
    RestaurantsModule,
    ShopsModule
  ],
  exports: [WrapperComponent],
  bootstrap: [],
})
export class WrapperModule { }
